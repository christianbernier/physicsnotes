---
title: The Schrödinger Equation
date: 2022-02-17
---

## What is the Schrödinger Equation?

The **Schrödinger equation** is a differential equation whose solution gives the wave behavior of particles. It is not derived from any previous fundamental laws; instead, it is a new and independent result which is confirmed through experimental observations.

The equation is justified by analyzing its solution for a free particle, which should result in the de Broglie wave.

### Wave Function, $\psi\left(x\right)$

For a simple de Broglie wave, its wave function is $\psi\left(x\right)=A\sin{kx}$. To find a differential equation, we just take the derivative:

$$\frac{d\psi}{dx}=kA\cos{kx}\newline\frac{d^2\psi}{dx^2}=-k^2\psi\left(x\right)$$

Using the second derivative with the kinetic energy $K=p^2/2m=\left(h/\lambda\right)^2/2m=\hbar^2 k^2/2m$,

$$\frac{d^2\psi}{dx^2}=-k^2\psi\left(x\right)=-\frac{2m}{\hbar^2}K\psi\left(x\right)=-\frac{2m}{\hbar^2}\left(E-U\right)\psi\left(x\right)$$

where $E=K+U$ is the non-relativistic total energy of the particle. For free particles, $U=0$ so $E=K$. But in the more general case,

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+U\left(x\right)\psi\left(x\right)=E\psi\left(x\right)$$

This is the *time-independent Schrödinger equation* for one-dimensional motion. Solving this equation gives the wave at time $t=0$. 

### Time Dependence

For a traveling wave, we use the function $\Psi\left(x, t\right)$:

$$\Psi\left(x, t\right)=\psi\left(x\right)e^{-i\omega t}$$

Note that the time dependence part of the function is given by the complex function $e^{-i\omega t}$, where $\omega=E/\hbar$.

## How to Use the Schrödinger Equation

1. Write the following equation using the value for $U\left(x\right)$ (if $U\left(x\right)$ is discontinuous, use multiple equations):

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+U\left(x\right)\psi\left(x\right)=E\psi\left(x\right)$$

2. Find an equation for $\psi\left(x\right)$ by solving the differential equation
3. Generally, multiple solutions can be found. Use the boundary conditions to eliminate all the impossible ones, and plug in constants
4. If seeking the solutions for a discontinuous potential energy function, apply continuity conditions on $\psi\left(x\right)$ and usually on $d\psi/dx$ at the boundary between different regions

### Probabilities and Normalization

One step left in using the Schrödinger equation is to determine the amplitude of the wave. In this case, the wave is not a displacement nor pressure wave; it is an entirely different type of wave whose squared absolute amplitude (it may be complex, so the absolute amplitude is needed) gives the probability of finding a particle in a given region of space.

Using the probability density, $P\left(x\right)$,

$$P\left(x\right)~dx=\left|\psi\left(x\right)\right|^2~dx$$

And for the time-dependent wave function,

$$\left|\Psi\left(x,t\right)\right|^2=\left|\psi\left(x\right)\right|^2\left|e^{-i\omega t}\right|^2=\left|\psi\left(x\right)\right|^2$$

Notice how the amplitude of the time dependent part is 1, so it is simply removed. Therefore, the probability density for a Schrödinger equation solution is independent of time. These states are called **stationary states**.

### Continuing the recipe

Using the previous section about the probability density of the Schrödinger equation, we can use the following steps to complete the recipe.

5. The probability of a wave function describing a single particle must sum to 100% since the particle must be located somewhere between $x=-\infty$ and $x=+\infty$. That is:

$$\int_{-\infty}^{+\infty}\left|\psi\left(x\right)\right|^2~dx=1$$

Note: since the Schrödinger equation is linear, all constant multiples of $\psi\left(x\right)$ are also solutions. However, the constant must be chosen such that the probability sums to 1. This is called the **normalization condition**

6. Any solution that becomes infinite must be discarded since the function represents a probability (we do this by setting the multiplicative constant to 0)
7. To find the probability of finding a particle between two points $x_1$ and $x_2$, sum the probability density function over the interval:

$$P\left(x_1:x_2\right)=\int_{x_1}^{x_2}P\left(x\right)~dx=\int_{x_1}^{x_2}\left|\psi\left(x\right)\right|^2~dx$$

8. Since we are dealing with probabilities, instead of determining the exact location of a particle at a given time, we take several measurements and find the *average* location of the particle:

$$x_{av}=\frac{n_1x_1+n_2x_2+...}{n_1+n_2+...}=\frac{\sum n_ix_i}{\sum n_i}$$

Changing the sums to integrals, we get:

$$x_{av}=\frac{\int_{-\infty}^{+\infty}P\left(x\right)x~dx}{\int_{-\infty}^{+\infty}P\left(x\right)~dx}=\int_{-\infty}^{+\infty}\left|\psi\left(x\right)\right|^2x~dx$$

assuming the function is normalized (so the denominator is 1). Therefore, the average value of any function of x can be found as:

$$\left[f\left(x\right)\right]=\int_{-\infty}^{+\infty}P\left(x\right)f\left(x\right)~dx=\int_{-\infty}^{+\infty}\left|\psi\left(x\right)\right|^2f\left(x\right)~dx$$

Average values calculated using the integral formulas are called **expectation values**.