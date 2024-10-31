import { InputNumber } from '@/components';

const meta = {
    title: 'Example/InputNumber',
    component: InputNumber,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        name: '',
        inputId: ''
    }
};

export const Main = {};

export const IntegerOnly = {
    args: {
        name: 'integer-only',
        inputId: 'integeronly'
    }
}

export const MinMax = {
    args: {
        inputId: 'minmax',
        min: 10,
        max: 20
    }
}

export default meta;

