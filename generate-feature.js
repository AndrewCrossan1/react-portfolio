import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawFeatureName = process.argv[2];

if (!rawFeatureName) {
    console.error('❌ Please provide a feature name. Example: npm run generate:feature home');
    process.exit(1);
}

const toPascalCase = (str) =>
    str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter) => letter.toUpperCase()).replace(/[\s-_]+/g, '');

const featureName = rawFeatureName.toLowerCase();
const pascalName = toPascalCase(rawFeatureName);

// Resolves relative to the project root directory
const targetDir = path.resolve(process.cwd(), 'src/features', featureName);

if (fs.existsSync(targetDir)) {
    console.error(`❌ Feature "${featureName}" already exists at ${targetDir}`);
    process.exit(1);
}

const subdirs = ['assets', 'components', 'hooks', 'types'];

subdirs.forEach((dir) => {
    fs.mkdirSync(path.join(targetDir, dir), { recursive: true });
});

// Boilerplate: types/index.ts
const typesContent = `export interface ${pascalName}State {
    data: unknown | null;
    isLoading: boolean;
    error: string | null;
}
`;

// Boilerplate: hooks/use<Feature>.ts
const hookContent = `import { useState } from 'react';
import type { ${pascalName}State } from '../types';

export const use${pascalName} = () => {
    const [state, setState] = useState<${pascalName}State>({
        data: null,
        isLoading: false,
        error: null,
    });

    return {
        ...state,
    };
};
`;

// Boilerplate: <Feature>Page.tsx with SEO integration
const pageContent = `import React from 'react';
import { SEO } from '@components/ui/SEO';
import { use${pascalName} } from './hooks/use${pascalName}';

export const ${pascalName}Page: React.FC = () => {
    const { isLoading } = use${pascalName}();

    return (
        <>
            <SEO 
                title="${pascalName}" 
                description="Explore ${featureName} details and features."
            />
            <div className="space-y-6">
                <div className="border-b border-neutral-800 pb-5">
                    <h1 className="text-2xl font-semibold tracking-tight text-neutral-100">
                        ${pascalName}
                    </h1>
                    <p className="mt-1 text-sm text-neutral-400">
                        Welcome to the ${featureName} feature page.
                    </p>
                </div>
            </div>
        </>
    );
};
`;

fs.writeFileSync(path.join(targetDir, 'types', 'index.ts'), typesContent);
fs.writeFileSync(path.join(targetDir, 'hooks', `use${pascalName}.ts`), hookContent);
fs.writeFileSync(path.join(targetDir, `${pascalName}Page.tsx`), pageContent);

fs.writeFileSync(path.join(targetDir, 'assets', '.gitkeep'), '');
fs.writeFileSync(path.join(targetDir, 'components', '.gitkeep'), '');

console.log(`✅ Feature "${featureName}" successfully created at: src/features/${featureName}`);
