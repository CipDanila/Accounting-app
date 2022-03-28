import React from 'react';
import Background from '../components/Background';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';
import StaticBlock from '../components/StaticBlocks';

function Homepage() {
  return (
    <div>
      <Header />
      <MainCarousel />
      <div className="container-block-section">
        <StaticBlock className="size-25" icon="M" title="Market Analysis" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ut orci sed malesuada. Quisque diam ipsum, aliquet quis ante et, pharetra laoreet nibh. Praesent vitae tincidunt nisi. Vestibulum at. " />
        <StaticBlock className="size-25" icon="A" title="Accounting Advisor" description="Mauris enim justo, dignissim eu dui eu, suscipit consectetur lectus. Nulla posuere metus ut sagittis scelerisque. Etiam pellentesque, ex in porttitor euismod, justo odio tincidunt tellus, sed consequat nulla massa." />
        <StaticBlock className="size-25" icon="G" title="General Consultancy" description="Nunc euismod iaculis eleifend. Integer malesuada leo non magna feugiat dapibus. Praesent lobortis venenatis metus, non convallis est pellentesque quis. Donec nibh lectus, euismod vitae accumsan quis, porta eget lectus." />
        <StaticBlock className="size-25" icon="S" title="Structured Assestment" description="Curabitur sollicitudin, risus sit amet hendrerit sollicitudin, purus leo interdum nunc, nec dapibus neque diam ac erat. Sed pretium turpis in purus blandit, sed commodo nisi gravida. Proin pellentesque dui." />
      </div>
      <Background />
      <Footer />
    </div>
  );
}

export default Homepage;
