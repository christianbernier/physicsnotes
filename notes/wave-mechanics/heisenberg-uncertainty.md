---
title: Heisenberg Uncertainty Principles
date: 2022-02-10
---

## Uncertainty with de Broglie Waves

Since uncertainty principles for classical waves apply to all waves, they can also be applied to de Broglie waves. We can use the fact that $p=h/\lambda$ and the differential $dp=\left(-h/\lambda^2\right)d\lambda$ to determine that

$$\Delta p = \frac{h}{\lambda^2}\Delta\lambda$$

Combining this with the classical uncertainty principle, we get

$$\Delta x \Delta p \sim \epsilon h$$

This means the smaller the wave packet, the larger the uncertainty about its momentum. Without going into the quantum mechanics, it turns out the smallest possible value for $\Delta x \Delta p$ is $h/4\pi$, meaning

$$\Delta x \Delta p_x \geq \frac{1}{2}\hbar$$

This is the first of the Heisenberg uncertainty relationships. Since this is the limit of how much can be known about a wave packet, it is reasonable to say that

$$\Delta x \Delta p_x \sim \hbar$$

### Single-slit experiment

Upon approaching the single split, we know the momentum of the electrons exactly, meaning their x-position is completely unknowable. Once they pass through the slit, we know a range of their positions, and so less about their momenta. After the slit, we are not certain about their the electron's momentum or position, explaining the diffraction pattern seen.

## Energy-Frequency Uncertainty Principle

Using the equation for energy for light waves, $E=hf$,

$$\Delta E \Delta t \sim \epsilon h$$

Again, since the minimum is $\epsilon = 1/4\pi$,

$$\Delta E \Delta t \geq \frac{1}{2}\hbar$$

This is the second of the Heisenberg uncertainty relationships: the more precisely we try to measure the time coordinate of a particle, the less we know about the energy of that particle. And just like the first uncertainty relationship,

$$\Delta E \Delta t \sim \hbar$$

## Heisenberg Uncertainty Relationships

1. It is not possible to make a simultaneous determination of the position and the momentum of a particle with unlimited precision.
2. It is not possible to make a simultaneous determination of the energy and the time coordinate of a particle with unlimited precision.

### Unsettling nature of the Heisenberg uncertainty relationships

It is not simply *uncertainty* that these relationships imply; it is an inability to determine the values of position and momentum simultaneously. In other words, it is not a limit of our current technology; it is a limit of the universe.

## Statistical Interpretation of Uncertainty

In a single-slit experiment, detectors can be placed on the screen to determine the momentum of the particles after passing through the slit. This resembles a statistical distribution centered around $p_x=0$ with a width of $\Delta p_x$. The definition of the standard deviation of a quantity $A$, $\sigma_A$ centered about $A_{av}$:

$$\sigma_A=\sqrt{\left(A^2\right)_{av}-\left(A_{av}\right)^2}$$

Similarly, the formal definition of the uncertainty of momentum is

$$\Delta p_x=\sqrt{\left(p_x^2\right)_{av}-\left(p_{x,av}\right)^2}$$

But since $p_{x, av}=0$,

$$\Delta p_x=\sqrt{\left(p_x^2\right)_{av}}$$