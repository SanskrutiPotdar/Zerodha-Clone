import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe("Hero Component", () => {
    test("renders Hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", expect.stringContaining("homeHero"));
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', { name: /Sign up now/ });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});
