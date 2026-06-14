import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion-title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          textAlign: 'left',
          border: 'none',
          outline: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none'
        }}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      
      {isOpen && (
        <div className="accordion-content fade-in" role="region">
          {children}
        </div>
      )}
    </div>
  );
}
