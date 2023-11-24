import Marquee from "react-fast-marquee";
import Image from "next/image";
import MarqueeImg1 from "../assets/marquee-logo1.png";
import MarqueeImg2 from "../assets/marquee-logo2.png";
import MarqueeImg3 from "../assets/marquee-logo3.png";
import MarqueeImg4 from "../assets/marquee-logo4.png";
import MarqueeImg5 from "../assets/marquee-logo5.png";
import MarqueeImg6 from "../assets/marquee-logo6.png";
import MarqueeImg7 from "../assets/marquee-logo7.png";
import MarqueeImg8 from "../assets/marquee-logo8.png";
import Link from "next/link";

export default function MarqueeCards() {
  return (
    <div className="marquee-container">
      <Marquee>
      <div className="marquee-cards">
        <Image src={MarqueeImg1}></Image>
        <div className="marquee-txt">
          <h1>$hosky</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#a252d0'}}>
        <Image src={MarqueeImg2}></Image>
        <div className="marquee-txt">
          <h1>danketsu</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#091f2c'}}>
        <Image src={MarqueeImg3}></Image>
        <div className="marquee-txt">
          <h1>bitfins</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#000'}}>
        <Image src={MarqueeImg4}></Image>
        <div className="marquee-txt">
          <h1>future fest</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#000'}}>
        <Image src={MarqueeImg5}></Image>
        <div className="marquee-txt">
          <h1>vudu brigada</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#000'}}>
        <Image src={MarqueeImg6}></Image>
        <div className="marquee-txt">
          <h1>pendulum</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#ff8a8a'}}>
        <Image src={MarqueeImg7}></Image>
        <div className="marquee-txt">
          <h1>cryptoraggies</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      <div className="marquee-cards" style={{backgroundColor:'#455a44'}}>
        <Image src={MarqueeImg8}></Image>
        <div className="marquee-txt">
          <h1>cardano<br/>stonerz club</h1>
          <Link href='/'>shop now</Link>
        </div>
      </div>
      </Marquee>
    </div>
  );
}
