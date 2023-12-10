const container = {
    size: 30,
};

const lines = {
    size: 3,
};

const full = container.size - lines.size;
const half = (container.size - lines.size)/2;

const animations = {
    container: {
        initial: {
            y: 20, opacity: 0,
        },
        animate: {
            y: 0, opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    },
    lines: [
        {
            initial: {
                y: [half, half, 0],
                rotate: 0,
            },
            opened: {
                y: half,
                rotate: [0, 0, 45],
            },
        },
        {
            initial: {
                y: half,
                height: lines.size,
                opacity: 1,
            },
            opened: {
                height: 0,
                opacity: 0,
            },
        },
        {
            initial: {
                y: [half, half, full],
                rotate: 0,
            },
            opened: {
                y: half,
                rotate: [0, 0, -45],
            },
        },
    ],
};

export default {
    container,
    lines,
    animations,
};
