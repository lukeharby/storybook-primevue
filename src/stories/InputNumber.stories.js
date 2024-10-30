import { InputNumber } from '@/components';

const meta = {
    title: 'Example/InputNumber',
    component: InputNumber,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: '',
        name: '',
        inputId: ''
    }
};

export const Main = {};

export const IntegerOnly = {
    args: {
        label: 'Integer only',
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

