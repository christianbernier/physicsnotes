---
title: Electromagnetic Waves
date: 2022-01-22
---

## Review of Electromagnetism

Electric charges produce an electric field, $\boldsymbol{\overrightarrow{E}}$. Flowing current in a wire produces a magnetic field, $\boldsymbol{\overrightarrow{B}}$. If charges do not move and current does not flow, the electric and magnetic fields are said to be *static*.

Accelerating charges and currents that vary with time produce electromagnetic waves, where the $\boldsymbol{E}$ and $\boldsymbol{B}$ fields vary over time.

## Electromagnetic Wave Basics

### Plane waves

Plane waves (when wave fronts are planes) are the simplest versions of electromagnetic waves. They can be described as such:

$$\boldsymbol{\overrightarrow{E}}=\boldsymbol{\overrightarrow{E_0}}\sin{\left(kz-\omega t\right)} \newline \boldsymbol{\overrightarrow{B}}=\boldsymbol{\overrightarrow{B_0}}\sin{\left(kz-\omega t\right)}$$

Where $k$ is the wave number, found from the wavelength: $k=2\pi / \lambda$, and $\omega$ is the angular frequency, found from the frequency: $\omega = 2\pi f$.

Since $c=\lambda f$, the wave number and angular frequency are related as such:

$$c=\frac{\omega}{k}$$

### Polarization

Polarization is determined by the vector $\boldsymbol{\overrightarrow{E_0}}$ and the direction of propagation of the electromagnetic wave. The direction of $\boldsymbol{\overrightarrow{B_0}}$ must be perpendicular to both $\boldsymbol{\overrightarrow{E}}$ and the direction the wave propagates, such that $\boldsymbol{\overrightarrow{E}} \times \boldsymbol{\overrightarrow{B}}$ is the direction of the wave.

$E_0$ and $B_0$ are related such that $B_0 = E_0 / c$.

### Poynting vector, $\boldsymbol{\overrightarrow{S}}$

The electromagnetic wave transmits energy according to its **Poynting vector**, which is defined as such:

$$\boldsymbol{\overrightarrow{S}} = \frac{1}{\mu_0}\boldsymbol{\overrightarrow{E}}\times \boldsymbol{\overrightarrow{B}}$$

Where $\mu_0$ is the vacuum permeability constant, approximately $4\pi * 10^{-7} H/m$.

For the plane wave, the Poynting vector is determined as so:

$$\boldsymbol{\overrightarrow{S}}=\frac{1}{\mu_0}E_0B_0\sin^2{\left(kz-\omega t\right)}\boldsymbol{\hat{k}}$$

And since the power received is equal to the energy times area, the power delivered by a plane wave is determined like this:

$$P=SA=\frac{1}{\mu_0}E_0B_0A\sin^2{\left(kz-\omega t\right)}$$

Or, since $B_0=E_0/c$,

$$P=\frac{1}{\mu_0c}E_0^2A\sin^2{\left(kz-\omega t\right)}$$

Notice how the power delivered is proportional to $E_0^2$. This means the **intensity**, average power per unit area, is proportional to the square of the amplitude of the wave.

### Average power

According to the equation above, intensity fluctuates with a frequency of $2f=2\left(\omega/2\pi\right)$.

Sensors (like our eyes) can't see fluctuations in intensity on the order of $10^{15}$ times per second. Therefore, we can find the average power as such:

$$P_{average}=\frac{1}{T}\int_0^TP\~dt$$

$$I=\frac{P_{average}}{A}=\frac{1}{2\mu_0c}E_0^2$$

## Waves Interacting

### Principle of superposition

Waves can interact with each other through the processes of interference and diffraction, because of the **principle of superposition**, which states that waves can "add together" their amplitudes at points.

### Double-slit experiment

A plane wave approaches a wall with two slits in it. On the other side of the wall, the wave is diffracted, such that it covers a greater area than it otherwise would. This causes the waves to interfere with each other, producing a pattern of lines on the screen.

The brighter spots are caused by **constructive interference**, which is when two waves' crests intersect. The dimmer spots are caused by **destructive interference**, which is when one wave's crest intersects another wave's trough (valley).

### Diffraction Grating

Diffraction grating allows light waves to be split into their constituent wavelengths, according to the following equation:

$$d\sin{\theta}=n\lambda$$

Where $d$ is the slit spacing and $n$ is the **order of diffraction** (an integer), which represents which set of wavelengths of light the angle refers to (see image below).

![Diffraction](../../public/images/diffraction.jpeg)

Diffraction grating is useful if $d$ is only a few times the wavelength, making it impossible for short-wavelength light like x-rays.

### X-ray crystal diffraction

For short wavelength light, crystalline structures of materials are used to diffract the light. Interference maxima occur according to *Bragg's Law of X-ray Diffraction*:

$$2d\sin{\theta}=n\lambda$$

![X-ray crystal diffraction](../../public/images/x-ray-crystal-diffraction.png)