---
title: Confining a Particle
date: 2022-02-17
---

## Free vs Confined Particles

**Free particles** are those which have no forces acting on them, meaning they can be located anywhere. **Confined particles**, on the other hand, are those represented by a wave packet which makes it likely to be found at a particular region of space (the size of which is $\Delta x$). The wave packet can be constructed with different sine and cosine waves.

## Confined Electrons

Imagine an apparatus with three narrow metal tubes separated by two boundaries: $A$ and $B$. The distance of the center tube (between $A$ and $B$) has length $L$. The center section is grounded ($V=0$), and the other two sections have some potential $-V_0$. The gaps $A$ and $B$ are made as small as possible such that the boundaries are effectively instantaneous. This is called a *potential energy well*.

The potential energy of the electron passed either region is $U_0=qV=\left(-e\right)\left(-V_0\right)=+eV_0$. Imagine the electron moving in the center region with some kinetic energy $K$ which is less than $U_0$. This means the electron cannot leave its center potential energy well (classically).

### Infinite potential energy well

Now imagine the potential energy $U_0$ is infinite (not a bad approximation when the kinetic energy is much less than the potential energy). This would result in the electron's wave having exactly $0$ amplitude in the forbidden regions on either side, meaning the probability to find the electron there is exactly $0$.

Using the condition that the wave must be continuous at boundaries $A$ and $B$, only wave packets of half-wavelengths are possible electron wave packets (ex. $1/2$, $1$, $3/2$, ...). Therefore, only certain wavelengths are allowed, meaning only certain momentum values are allowed, meaning only certain energy levels are allowed. This is called the *quantization of energy*.

For a region of length $L$, the possible wavelengths are

$$\lambda_n=\frac{2L}{n}$$

where $n$ is an integer greater than 1.

Using the de Broglie relationship $\lambda=h/p$,

$$p_n=n\frac{h}{2L}$$

And so the energies allowed (using $E=p^2/2m$) are

$$E_n=n^2\frac{h^2}{8mL^2}$$

These are the quantized values of the energy of the electron. The quantization of energy is a fundamental principle and feature of quantum theory, and is often used in experimental physics.

## Using the Uncertainty Principle

Using the infinite potential energy well from before, we know $\Delta x \sim L$ can be used to approximate the uncertainty of the location. Therefore, using the definition of uncertainty ($\Delta p=\sqrt{\left(p_x^2\right)_{av}-\left(p_{x,av}\right)^2}$) and the fact that the average momentum is $0$ (since the electron can be moving in either direction with equal probability), $\Delta p=nh/L$. This means

$$\Delta x\Delta p_x\sim L\frac{nh}{L}=nh$$

The value of this uncertainty is greater than $\hbar/2$ and so fits the Heisenberg uncertainty relationship.