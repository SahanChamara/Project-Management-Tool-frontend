import React from 'react'
import Logo from '@/components/logo/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const GoogleOAuthFailure = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-background to-muted px-4 py-12">
            <div className="w-full max-w-md space-y-10">
                <div className="flex flex-col items-center space-y-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/20"
                    >
                        <Logo />
                        <span className="font-semibold">Smart Flow</span>
                    </Link>
                </div>

                <Card className="border-border/40 shadow-lg">
                    <CardHeader className="flex flex-col items-center space-y-1 pb-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                            <AlertCircle className="h-6 w-6 text-destructive" />
                        </div>
                    </CardHeader>

                    <CardContent className="pb-4 pt-0 text-center">
                        <h1 className="mb-2 text-xl font-semibold tracking-tight">Authentication Failed</h1>
                        <p className="text-muted-foreground">
                            We couldn't sign you in with Google. Please try again or use another method.
                        </p>
                    </CardContent>

                    <CardFooter className="flex flex-col space-y-3">
                        <Button
                            className="w-full"
                            onClick={() => navigate("/sign-in")}
                        >
                            Try Again
                        </Button>

                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() => navigate("/help")}
                        >
                            Need Help?
                        </Button>
                    </CardFooter>
                </Card>

                <div className="text-center text-sm text-muted-foreground">
                    <p>
                        Having trouble? <Link to="/contact" className="font-medium text-primary underline underline-offset-4">Contact Support</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GoogleOAuthFailure
