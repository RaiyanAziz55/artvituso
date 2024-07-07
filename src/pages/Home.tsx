// src/pages/Home.tsx

import omarPacha from '../assets/images/omar_pacha_2005.115.2.jpg';
import portraitOfAMan from '../assets/images/portrait_of_a_man_2006.170.19.jpg';
import portraitOfATelegrapherBoy from '../assets/images/portrait_of_a_telegrapher_boy_2023.146.83.jpg';

import theBeanSorters from '../assets/images/the_bean_sorters_2005.57.2.jpg';


const Home = () => {
  return (
    <div>
        <section className='relative w-screen h-screen bg-home-1 bg-cover bg-center flex justify-start items-center'>
        <div className="h-auto w-96 bg-white p-8 ml-32 border-gray-900 border-2">
          <h1 className="relative text-3xl font-bold mb-4">WELCOME TO THIS PLACE</h1>
          <p className="relative text-lg">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Proin Non Sem Feugiat, Porta Risus Eu, Aliquam Ante. Donec Ac Lectus Felis. Morbi Eget Vulputate Dui.
          </p>
        </div>
        </section>
        <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">THE SPOTLIGHT</h2>
        <div className="grid grid-cols-4 gap-4 px-12">
          <div>
            <img src={omarPacha} alt="Pic 1" className="w-full h-auto"/>
            <p className="mt-2">PIC 1<br/>BY PERSON 1</p>
          </div>
          <div>
            <img src={portraitOfATelegrapherBoy} alt="Pic 1" className="w-full h-auto"/>
            <p className="mt-2">PIC 1<br/>BY PERSON 1</p>
          </div>
          <div>
            <img src={theBeanSorters} alt="Pic 1" className="w-full h-auto"/>
            <p className="mt-2">PIC 1<br/>BY PERSON 1</p>
          </div>
          <div>
            <img src={portraitOfAMan} alt="Pic 1" className="w-full h-auto"/>
            <p className="mt-2">PIC 1<br/>BY PERSON 1</p>
          </div>
        </div>
      </section>
      <section className='relative w-screen h-screen bg-home-2 bg-cover bg-center flex justify-end items-center'>
        <div className="h-auto w-96 bg-white p-8 mr-32 border-gray-900 border-2">
          <h1 className="relative text-3xl font-bold mb-4">WELCOME TO THIS PLACE</h1>
          <p className="relative text-lg">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Proin Non Sem Feugiat, Porta Risus Eu, Aliquam Ante. Donec Ac Lectus Felis. Morbi Eget Vulputate Dui.
          </p>
        </div>
        </section>
    </div>
  );
};

export default Home;
