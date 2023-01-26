import { useState, useEffect } from 'react';

interface Props {
  liftTab: any;
}

const Tabs = ({ liftTab }: Props) => {
  const [activeTab, setActive] = useState<string>('tab1');

  useEffect(() => {
    liftTab(activeTab);
  }, [activeTab]);

  return (
    <div className='flex justify-between w-1/2 mx-auto my-20 rounded-3xl overflow-hidden sm:w-11/12'>
      <div
        className={`flex-1 text-center cursor-pointer py-5 border border-light-text rounded-bl-3xl rounded-tl-3xl   ${
          activeTab === 'tab1'
            ? 'bg-gradient-to-r from-light-color to-dark-color'
            : 'bg-dark-bg'
        }`}
        onClick={() => setActive('tab1')}
      >
        Tab 1
      </div>
      <div
        className={`flex-1 text-center cursor-pointer py-5 border border-light-text ${
          activeTab === 'tab2'
            ? 'bg-gradient-to-r from-light-color to-dark-color'
            : 'bg-dark-bg'
        }`}
        onClick={() => setActive('tab2')}
      >
        Tab 2
      </div>
      <div
        className={`flex-1 text-center cursor-pointer py-5 border border-light-text rounded-br-3xl rounded-tr-3xl ${
          activeTab === 'tab3'
            ? 'bg-gradient-to-r from-light-color to-dark-color'
            : 'bg-dark-bg'
        }`}
        onClick={() => setActive('tab3')}
      >
        Tab 3
      </div>
    </div>
  );
};

export default Tabs;
