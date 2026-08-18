import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { MemoryRouter } from "react-router-dom";
import { PaletteTree } from "./palette";
import { HomePage } from "@features/home/HomePage";
import { Navbar } from "@components/layout/Navbar";
import {NotFound} from "@components/layout/NotFound.tsx";
import {ThemeToggle} from "@components/layout/ThemeToggle.tsx";
import {Header} from "@components/layout/Header.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/HomePage">
                <MemoryRouter>
                    <HomePage />
                </MemoryRouter>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </ComponentPreview>
            <ComponentPreview path="/HomePage">
                <HomePage/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/NotFound">
                <NotFound/>
            </ComponentPreview>
            <ComponentPreview path="/ThemeToggle">
                <ThemeToggle/>
            </ComponentPreview>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;