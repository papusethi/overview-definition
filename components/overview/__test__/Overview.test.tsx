import React from 'react';
import Overview from '../Overview';
import { render, screen } from '@testing-library/react';

describe('Overview Component', () => {
    it('should render <Overview/> properly', () => {
        render(<Overview />);
    });

    it('should render card title properly', () => {
        render(<Overview />);
        const cardTitle = screen.getByText(/Details/i);
        expect(cardTitle).toBeInTheDocument();
    });

    it('should render left button group which is on toolbar properly', () => {
        render(<Overview />);
        const leftBtnGroup = screen.getByTestId('leftBtnGroup');
        expect(leftBtnGroup).toBeInTheDocument();
    });

    it('should render right button group - save and reset properly', () => {
        render(<Overview />);
        const rightBtnGroup = screen.getByTestId('rightBtnGroup');
        expect(rightBtnGroup).toBeInTheDocument();
    });

    it('should render custom definition component properly', () => {
        render(<Overview />);
        const customDefintion = screen.getByTestId('customDefintion');
        expect(customDefintion).toBeInTheDocument();
    });
});
