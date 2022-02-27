---
title: Steps and Barriers
date: 2022-02-27
---

## Potential Energy Step, $E\gt U_0$

Imagine the potential energy step defined by

$$U\left(x\right)=\begin{cases} 0 & x \lt 0 \newline U_0 & x \geq 0\end{cases}$$

Assuming the total energy of the particle, $E$, is greater than the potential energy $U_0$, the solutions of the Schrödinger equation become

$$\psi_0\left(x\right)=A\sin{k_0x}+B\cos{k_0x}~~~~k_0=\sqrt{\frac{2mE}{\hbar^2}}~~~~x\lt 0\newline\psi_1\left(x\right)=C\sin{k_1x}+B\cos{k_1x}~~~~k_0=\sqrt{\frac{2m}{\hbar^2}\left(E-U_0\right)}~~~~x\gt 0$$

Finding the coefficients $A$, $B$, $C$, and $D$ can be found by applying the boundary conditions for $\psi$ and $\psi'=d\psi/dx$: $\psi_0\left(0\right)=\psi_1\left(0\right)$ and $\psi'_0\left(0\right)=\psi'_1\left(0\right)$.

Since the coefficients are generally complex, we need to use Euler's formula ($e^{i\theta}=\cos{\theta}+i\sin{\theta}$) to transform the functions into exponentials:

$$\psi_0\left(x\right)=A'e^{ik_0x}+B'e^{-ik_0x}~~~~x\lt 0\newline \psi_1\left(x\right)=C'e^{ik_1x}+D'e^{-ik_1x}~~~~x\gt 0$$

And using the time-dependent versions,

$$\Psi_0\left(x,t\right)=A'e^{i\left(k_0x-\omega t\right)}+B'e^{-i\left(k_0x+\omega t\right)}~~~~x\lt 0\newline \Psi_1\left(x,t\right)=C'e^{i\left(k_1x-\omega t\right)}+D'e^{-i\left(k_1x+\omega t\right)}~~~~x\gt 0$$

Since the first part of the first equation represents a wave moving in the $+x$ direction whereas its second part represents a wave moving in the $-x$ direction, it can represent a wave moving towards a step and being reflected. Therefore, $\left|B'\right|^2/\left|A'\right|^2$ gives the reflected fraction of the incident wave intensity.

Applying the same logic to the second equation (over the "step"), we can see that $\left|C'\right|^2$ is the intensity of the wave moving to the right over the step, and $D'=0$ since there is no boundary to reflect the wave back over the step.

This creates a constant probability function over the step and a standing wave probability before the wave, consistent with predictions.

## Potential Energy Step $E\lt U_0$

If the energy of the particle is less than the height of the step, the solutions become

$$\psi_0\left(x\right)=A\sin{k_0x}+B\cos{k_0x}~~~~k_0=\sqrt{\frac{2mE}{\hbar^2}}~~~~x\lt 0\newline\psi_1\left(x\right)=Ce^{k_1x}+De^{-k_1x}~~~~k_1=\sqrt{\frac{2m}{\hbar^2}\left(U_0-E\right)}~~~~x\gt 0$$

Since the wave should not become infinite as $x\rightarrow\infty$, we set $C=0$. Using the boundary conditions, the solutions show penetration into the forbidden region. Additionally, we find that $\left|A'\right|=\left|B'\right|$, which indicates that the incident and reflected waves have the same amplitude.

### Penetration into the forbidden region

The wave nature of the particle and its uncertainty results in it penetrating into the forbidden region. The probability density in the forbidden region $x\gt 0$ is $\left|\psi_1\right|^2$, which is proportional to $e^{-2k_1x}$. For a representative penetration distance, $\Delta x$, 

$$\Delta x=\frac{1}{2k_1}=\frac{1}{2}\frac{\hbar}{\sqrt{2m\left(U_0-E\right)}}$$

Therefore, in order to enter the forbidden region, it must suddenly gain some amount of energy $U_0-E$. This obviously violates conservation of energy, but according to the uncertainty principle $\Delta E\Delta t\sim\hbar$, conservation of energy does not apply for times smaller than $\Delta t$ except to within $\Delta E\sim\hbar/\Delta t$. Therefore, the particle "borrows" some amount of energy $\Delta E$ and "returns" it within a time $\Delta t$. Since this amount of energy is the same, observers see this as conservation of energy.

The amount of borrowed energy is $\left(U_0-E\right)+K$, where $U_0-E$ is the energy to get over the step and $K$ is the kinetic energy it has after. This energy must be returned in

$$\Delta t=\frac{\hbar}{U_0-E+K}$$

The particle moves with $v=\sqrt{2K/m}$, meaning the distance it can travel is

$$\Delta x=\frac{1}{2}v\Delta t=\frac{1}{2}\sqrt{\frac{2K}{m}}\frac{\hbar}{U_0-E+K}$$

Note: the factor of $1/2$ is there so that the particle can penetrate and leave the region within the timeframe. Since as $K\rightarrow 0$, $\Delta x\rightarrow 0$ and $K\rightarrow \infty$, $\Delta x\rightarrow 0$, there must be some maximum penetration distance $\Delta x$ for some particular $K$:

$$\Delta x_{\text{max}}=\frac{1}{2}\frac{\hbar}{\sqrt{2m\left(U_0-E\right)}}$$

## Potential Energy Barrier

Consider the potential energy barrier defined by

$$U\left(x\right)=\begin{cases} 0 & x \lt 0 \newline U_0 & 0 \leq x \leq L \newline 0 & x \gt L\end{cases}$$

Particles whose energy $E$ is less than $U_0$ incident from the left partially reflect at $x=0$. The transmitted wave has the same wavelength as the incident wave but lower amplitude (since most of the wave is reflected).

### Barrier penetration (tunneling)

Classically, particles would not be able to appear at $x \gt L$ because they do not have sufficient kinetic energy to overcome the barrier. However, some particles do appear in that region, called **barrier penetration** or **quantum tunneling**.

Particles cannot be observed within the forbidden region $0\leq x\leq L$ but can be observed at $x\gt L$ after tunneling through the barrier.

Every particle incident on the barrier is either reflected or transmitted; none get "trapped" within the forbidden region. This creates a paradox for classical particles where they can be observed at $x\lt 0$ and $x\gt L$ but never in between. However, quantum particles represented as waves have this capability.

### Total internal reflection

An example of this penetration occurs for total internal reflection of light waves. If a beam of light gets totally reflected in a piece of glass but another piece of glass is brought close to the first one, it is possible to observe the light within the second piece of glass (but never in between). This is called **frustrated total internal reflection**.

The wave transmitting the light between the two glass pieces (the *evanescent wave*) has no energy and therefore cannot be observed, but it is there.