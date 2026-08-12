import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title = 'Developer Portfolio',
    description = 'Minimalist developer portfolio showcasing recent projects and software engineering experience.',
    canonical,
    ogImage = '/og-image.png',
}) => {
    const siteTitle = title.includes('Portfolio') ? title : `${title} | Alex Morgan`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook / LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical Link */}
            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    );
};
