import React from 'react';

const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: '2-digit', year: 'numeric' });

const TechStackReceipt = ({ 
  title = "ORDER #0042", 
  index = 0,
  items = [], 
  footerNote = "THANKS FOR VISITING",
  date = dateFormatter.format(new Date()).toUpperCase() 
}) => {
  return (
    <div className="flex justify-center p-8 bg-gray-200 min-h-[500px]">
      {/* Main Receipt Container */}
      <div className="receipt-container relative w-72 bg-white shadow-xl p-6 font-mono text-xs text-gray-800 flex flex-col gap-4 overflow-hidden">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

        {/* Header Section */}
        <div className="text-center pb-4 receipt-header">
          <span className="secondary-h4">{title.toUpperCase()}</span>
          <span>TECHNOLOGY STACK</span>
        </div>
        

        {/* Content Area - Dynamic Mapping */}
        <div className="flex-1 space-y-2 py-2">
          <div className="receipt-subheader">
            <div className="subheader-row">
              <span className="order-number">ORDER #{index}</span>
              <span className='date'>{date}</span>
            </div>
            <div className="subheader-row">
              <span>CASHIER</span>
              <span className="cashier-name">PATRICK</span>
            </div>
          </div>
          <div className="tech-stack-table-header">
            <span>QTY</span>
            <div className="techstack-table-item-header">
            <span>ITEM</span>
            <span>AMT</span>
            </div>
          </div>

          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="tech-stack-table-row" key={index}>
                <span>{index}</span>
                <div className="techstack-table-item-row">
                  <span className="uppercase">{item.name}</span>
                  <span className="text-gray-500">[{item.category || 'DEV'}]</span>
                </div>
              </div>
            ))
          ) : (
            <p className="italic text-center text-gray-400 py-4">NO ITEMS LISTED</p>
          )}
        </div>

        {/* Footer / Totals Section */}
        <div className="border-t border-dashed border-gray-400 pt-4 space-y-2">
          <div className="flex justify-between font-bold text-sm">
            <span>TOTAL SKILLS:</span>
            <span>{items.length}</span>
          </div>
          <span className="mt-4 text-center uppercase">
            {footerNote}
          </span>
          <div className="flex justify-center py-2 opacity-80">
            {/* Simple Barcode Placeholder */}
            <div className="h-8 w-full bg-[repeating-linear-gradient(90deg,black,black_2px,transparent_2px,transparent_4px)]"></div>
          </div>
        </div>

        {/* Torn Edge Effect */}
        <div className="absolute -bottom-1 left-0 right-0 h-4 bg-white" 
             style={{ clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)" }}>
        </div>
      </div>
    </div>
  );
};

export default TechStackReceipt;