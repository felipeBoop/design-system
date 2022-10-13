import {Meta, StoryObj } from '@storybook/react';
import {Heading, HeadingProps} from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem Ipsum.',
        size: 'md'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args: {},
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
        asChild : {
            table : {
                disable: true
            }
        }
    }
};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
        asChild : {
            table : {
                disable: true
            }
        }
    }
};

export const large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
        asChild : {
            table : {
                disable: true
            }
        }
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (<h1>Component with h1 tag</h1>)
    },
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
        asChild : {
            table : {
                disable: true
            }
        }
    }
};