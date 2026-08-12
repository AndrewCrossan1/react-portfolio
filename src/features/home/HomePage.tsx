import React from 'react';
import { SEO } from '@components/ui/SEO';
import { Button } from '@components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@components/ui/card';
import { Input } from '@components/ui/input';

export const HomePage: React.FC = () => {
    return (
        <>
            <SEO title="Home" description="Testing shadcn components with Tailwind v4." />
            <div className="max-w-md mx-auto space-y-6 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome Back</CardTitle>
                        <CardDescription>Enter your email to test the new shadcn form inputs.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-neutral-900 dark:text-neutral-200">
                                Email Address
                            </label>
                            <Input type="email" placeholder="alex@example.com" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Submit</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
};