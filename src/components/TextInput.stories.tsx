import {Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import {textInput, TextInputRootProps} from './TextInput';

export default {
    title: 'Components/TextInput',
    component: textInput.Root,
    args: {
        children: [
            <textInput.Icon>
                <Envelope />
            </textInput.Icon>,
            <textInput.Input placeholder='Type your e-mail here!'/>
        ],
    },
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <textInput.Input placeholder='Type your e-mail here!'/>
        ],
    },
    argTypes: {
        children : {
            table : {
                disable: true
            }
        },
    }
};