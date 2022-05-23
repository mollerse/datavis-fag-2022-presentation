import React from "react";
import { render } from "react-dom";
import {
  Deck,
  Slide,
  Heading,
  Link,
  Text,
  Appear,
  Code
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import CanvasSlide from "./CanvasSlide";
import midiControl from "./midiControl";

const theme = createTheme(
  {
    primary: "#050505",
    secondary: "#fbfbfb",
    tertiary: "#fbfbfb",
    quarternary: "#fbfbfb"
  },
  {
    primary: "'DejaVu Sans', Helvetica, sans-serif"
  }
);

const defaultSlideProps = {
  align: "flex-start top",
  className: "default-slide"
};

function AppearingBlock(props) {
  return (
    <Appear {...props}>
      <div>{props.children}</div>
    </Appear>
  );
}

function SmallText(props) {
  let className = `small-text ${props.className}`;
  return (
    <Text {...props} className={className}>
      {props.children}
    </Text>
  );
}

function H1(props) {
  return (
    <Heading caps size={1} lineHeight={1.25} {...props}>
      {props.children}
    </Heading>
  );
}

function H2(props) {
  return (
    <Heading caps size={2} lineHeight={1.25} textAlign="left" {...props}>
      {props.children}
    </Heading>
  );
}

function H3(props) {
  return (
    <Heading size={3} lineHeight={1.25} textAlign="center" {...props}>
      {props.children}
    </Heading>
  );
}

const controls = midiControl("Launch Control MIDI 1");

function Presentation() {
  return (
    <Deck theme={theme} transition={["slide"]} progress="none" controls={false}>
      <Slide {...defaultSlideProps}>
        <H1>Pseudorandom</H1>
        <H1>&nbsp;&nbsp;&nbsp;&nbsp;Pleasures&nbsp;&nbsp;&nbsp;&nbsp;</H1>
        <Text italic>— eller hvordan temme tilfeldighet</Text>
        <SmallText>Stian Veum Møllersen / @mollerse</SmallText>
        <SmallText>Digital Historieutvikling NRK</SmallText>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"randomline"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Pseudorandom</H2>
        <Text textAlign="left">
          Det finnes spesialkonstruerte funksjoner for å generere visuelt
          behagelig, men likevel tilfeldig støy: Pseudorandom Number Generators
          (PRNG).
        </Text>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Ken Perlin</H2>
        <Text textAlign="left">
          Opphavsmannen til den mest kjente metoden for pseudorandom innen
          grafikk: Perlin Noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Oppfunnet i 1982 til bruk i filmen Tron, som han også vant en
            Technical Achievement Oscar for i 1997.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps}>
        <H2>Simplex Noise</H2>
        <Text textAlign="left">
          Arvtageren til Perlin Noise. Samme prinsipp, bare kjappere og med
          færre visuelle artefakter.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">Oppfunnet i 2001 av Ken Perlin.</Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplex"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Gradient noise</H2>
        <Text textAlign="left">
          Prinsippet bak Perlin og Simplex noise kalles gjerne gradient noise.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Generaliserer utrolig bra til flere dimensjoner.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"2d"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Egenskaper</H2>
        <Text textAlign="left">
          Dette kan brukes til utrolig mange ting. Fordi vi får verdier i{" "}
          <Code>[-1, 1]</Code> kan det mappes til nesten hva som helst.
        </Text>
        <br />
        <Appear>
          <Text textAlign="left">
            Og fordi verdiene er kontinuerlige kan vi låne en haug med triks
            fra additiv syntese.
          </Text>
        </Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplexoctaves"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"simplexoctaves2d"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps}>
        <H2>Eksperiment</H2>
        <Text textAlign="left">
          Siden vi har en måte å lage gøyale linjer, så burde vi jo gjøre noe kreativt med dem.
        </Text>
        <br />
        <Appear><Text textAlign="left">Noe enkelt &rarr;</Text></Appear>
        <Appear><Text textAlign="left">Parametriser &rarr;</Text></Appear>
        <Appear><Text textAlign="left">Multipliser &rarr;</Text></Appear>
        <Appear><Text textAlign="left">Animer</Text></Appear>
      </Slide>

      <Slide {...defaultSlideProps} className="canvas-slide">
        <CanvasSlide controls={controls} sketch={"joydivision"} />
      </Slide>

      <Slide {...defaultSlideProps} />

      <Slide {...defaultSlideProps} align="center center">
        <Heading caps size={1}>
          Fin.
        </Heading>
      </Slide>
    </Deck>
  );
}
const mount = document.createElement("div");
document.body.appendChild(mount);
render(<Presentation />, mount);
