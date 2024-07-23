import { ReactP5Wrapper } from "@p5-wrapper/react";
import { P5Sketch } from "~/components/p5-sketch";
import { travel } from "~/sketches/travel"

export default function Travellin() {
    return (
        <>
            <div>Hello traveller</div>
            {typeof document !== "undefined" ? <ReactP5Wrapper sketch={travel} /> : undefined}
        </>
    );
  }