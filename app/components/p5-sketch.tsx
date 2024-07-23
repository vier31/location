import { ReactP5Wrapper, type Sketch } from "@p5-wrapper/react";


export const P5Sketch = ({sketch}: { sketch: Sketch}) => {
    return <>{typeof document !== "undefined" ? <ReactP5Wrapper sketch={sketch} /> : undefined}</>
}