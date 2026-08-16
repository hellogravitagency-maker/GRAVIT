import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll(".card")[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className="flex flex-row justify-start gap-4 pl-6 md:pl-12 max-w-[1800px] mx-auto">
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut"
                  },
                }}
                key={"card" + index}
                className="card border border-border"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 pr-6 md:pr-12 max-w-[1800px] mx-auto pb-12">
          <button
            className="relative z-40 h-12 w-12 border border-border flex items-center justify-center disabled:opacity-50 hover:bg-primary hover:text-background transition-colors cursor-pointer"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6" />
          </button>
          <button
            className="relative z-40 h-12 w-12 border border-border flex items-center justify-center disabled:opacity-50 hover:bg-primary hover:text-background transition-colors cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="max-w-5xl mx-auto bg-background border-x border-b border-border h-fit min-h-screen relative font-sans"
            >
              <button
                className="sticky top-4 right-4 h-12 w-12 border border-border flex items-center justify-center bg-background ml-auto hover:bg-primary hover:text-background transition-colors z-50 cursor-pointer"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6" />
              </button>
              
              <div className="p-8 md:p-14">
                <p className="text-sm font-mono uppercase tracking-widest text-secondary mb-4">
                  {card.category}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                  {card.title}
                </h1>
                
                <div className="w-full h-px bg-border mb-12" />

                <div className="aspect-video w-full border border-border overflow-hidden mb-12">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="text-secondary max-w-3xl leading-relaxed text-lg">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="block bg-background group h-80 w-72 md:h-[40rem] md:w-[30rem] overflow-hidden flex flex-col items-start justify-start relative z-10 transition-all cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-transparent z-10 pointer-events-none" />
        <div className="relative z-20 p-8">
          <p className="text-secondary text-sm font-mono uppercase tracking-widest text-left mb-2 group-hover:text-primary transition-colors">
            {card.category}
          </p>
          <h2 className="text-primary text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-[0.9] text-left">
            {card.title}
          </h2>
        </div>
        <img
          src={card.src}
          alt={card.title}
          className="object-cover absolute z-0 inset-0 w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
        />
      </motion.button>
    </>
  );
};
