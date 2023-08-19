"use client";

import { DarkContext } from "@/components/DarkModeProvider";
import { useContext } from "react";

import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const code: CodeComponent = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");

    const { isDark } = useContext(DarkContext);
    return !inline && match ? (
        <SyntaxHighlighter
            language={match[1]}
            PreTag="div"
            {...props}
            style={isDark ? oneDark : oneLight}
            className="text-sm w-full"
        >
            {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        <code
            className="text-[gray]"
            {...props}
        >
            {children}
        </code>
    );
};

export { code };
