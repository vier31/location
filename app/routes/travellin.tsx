import { P5Sketch } from "../components/p5-sketch";
import { travel } from "~/sketches/travel";

export default function Travellin() {
    return (
        <>
            <div>Hello traveller with sketch</div>
            <P5Sketch sketch={travel} />
        </>
    )
  }