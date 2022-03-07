---
title: One-Dimensional Atom
date: 2022-03-06
---

## Bohr Model vs Quantum Mechanics

The Bohr model of the atom works by describing the electron of a hydrogen atom moving around the nucleus in a circular orbit. However, quantum mechanics does not allow for fixed a fixed radius for the electron, and instead describes the electron in terms of its probability density.

## Using the Schrödinger Equation

To analyze the electron according to quantum mechanics, we analyze the Coulomb potential energy of the electron:

$$U\left(r\right)=-\frac{e^2}{4\pi\epsilon_0r}$$

In one dimension, the Schrödinger equation for the electron therefore is

$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}-\frac{e^2}{4\pi\epsilon_0x}\psi\left(x\right)=E\psi\left(x\right)$$

### Boundary conditions

We know that as $x\rightarrow\infty$, the wave function must drop to 0. Additionally, for the left side to remain finite at $x=0$, the wave function must also drop to 0 at $x=0$.

The simplest solution to these conditions is

$$\psi\left(x\right)=Axe^{-bx}$$

where $A$ is the normalization constant. Using this wave function in the Schrödinger equation above, we find that

$$b=\frac{me^2}{4\pi\epsilon_0\hbar^2}=\frac{1}{a_0}$$

The energy associated with this wave function is then

$$E=-\frac{\hbar^2b^2}{2m}=-\frac{me^4}{32\pi^2\epsilon_0^2\hbar^2}$$

which is the same as the energy of the ground state found using the Bohr model ($n=1$).

## Differences from the Bohr Model

Unlike the Bohr Model, the electron can be anywhere from $0\lt x\lt\infty$, however it is most likely to be found around the predicted Bohr radius.

As we go to higher energy states, the wave function produces more peaks, representing more places the electron could be. These same features are also produced for three-dimensional atoms.