/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { animated, config, Transition } from "react-spring";
import './styles.scss';

const Home = () => {
    return <div className='home'>
        <Transition
            items={[
                <h1 className='title colored'>NEXT</h1>,
                <h1 className='title'>Level</h1>,
                <h1 className='subtitle'>S<span className='colored'>o</span>lutions</h1>
            ]}
            trail={50}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            delay={200}
            config={config.molasses}
        >
            {({ opacity }, item) =>
                <animated.div
                    style={{
                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                    }}
                >
                    {item}
                </animated.div>
            }
        </Transition>
    </div>

}

export default Home