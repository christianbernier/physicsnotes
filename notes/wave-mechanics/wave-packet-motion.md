---
title: Wave Packet Motion
date: 2022-02-11
---

## Traveling Waves

The equation of a traveling wave with wave number $k$ and angular frequency $\omega$ ($\omega=2\pi f$) is

$$y\left(x, t\right)=A\cos{\left(kx-\omega t\right)}$$

And a combined traveling wave is

$$y\left(x, t\right)=A_1\cos{\left(k_1x-\omega_1 t\right)}+A_2\cos{\left(k_2x-\omega_2 t\right)}$$

Wave speed is found by $v=\lambda f$, or $v=\omega/k$. This is also known as the **phase speed**. As the wave moves, the peaks of the individual component waves line up in a way that makes the peak of the combined wave move faster than the peak of either component wave.

The equations for the waves (with equal amplitude and similar wave number and angular frequency) can be combined using trigonometric identities:

$$y\left(x, t\right)=2A\cos{\left(\frac{\Delta k}{2}x-\frac{\Delta \omega}{2}t\right)}\cos{\left(\frac{k_1+k_2}{2}x-\frac{\omega_1+\omega_2}{2}t\right)}$$

The first term in the equation above dictates the overall shape of the wave and the second term determines the fluctuations in that shape. Using $v=\omega/k$, the **group speed** of the combined wave is calculated as:

$$v_{group}=\frac{d\omega}{dk}$$

### Group speed of de Broglie waves

For a particle with a group of de Broglie waves, the energy is $E=hf=\hbar\omega$ so $dE=\hbar~d\omega$, and the momentum is $p=h/\lambda=\hbar k$ so $dp=\hbar~dk$. Therefore, the group speed of the de Broglie wave is

$$v_{group}=\frac{d\omega}{dk}=\frac{dE/\hbar}{dp/\hbar}=\frac{dE}{dp}$$

And for a classical particle with only kinetic energy, $E=K=p^2/2m$ so

$$\frac{dE}{dp}=\frac{d}{dp}\left(\frac{p^2}{2m}\right)=\frac{p}{m}=v$$

Therefore, the group speed and particle speed are identical.

!!For classical particles, $v_{group}=v_{particle}$.!!

### The spreading of a moving wave packet

Imagine a particle passing through a single-slit apparatus. It has initial position uncertainty of $\Delta x_0$ and initial momentum uncertainty of $\Delta p_{x0}$, moving with velocity $v_x$. Therefore, its initial velocity uncertainty will be $\Delta v_{x0}=\Delta p_{x0}/m$. Over time, its $x$ position will be $x=v_xt$ and its velocity will be $v_x=v_{x0}\plusmn \Delta v_{x0}$. Using both of these uncertainties for the $x$ position gives the following relationship:

$$\Delta x=\sqrt{\left(\Delta x_0\right)^2+\left(\Delta v_{x0}t\right)^2}=\sqrt{\left(\Delta x_0\right)^2+\left(\Delta p_{x0}t/m\right)^2}$$

But since $\Delta p_{x0}=\hbar /\Delta x_0$ due to the uncertainty principle,

$$\Delta x=\sqrt{\left(\Delta x_0\right)^2+\left(\hbar t/m\Delta x_0\right)^2}$$

This leads to the property that the more successful we are at confining a wave packet (making $\Delta x_0$ small), the faster it expands with time. In terms of the single-slit experiment, the smaller the slit, the faster the wave expands.