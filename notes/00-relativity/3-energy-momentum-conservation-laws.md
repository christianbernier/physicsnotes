---
title: Energy, Momentum, and Conservation Laws with Special Relativity
date: 2022-01-22
---

## New Definitions of Energy and Momentum

Dynamical quantities such as energy and momentum rely on length and time, and so have issues working with special relativity.

### Momentum

Momentum is classically defined as $\boldsymbol{\overrightarrow{p}}=m\boldsymbol{\overrightarrow{v}}$. An observer moving with respect to a collision would believe that momentum was not conserved due to relativistic effects.

The equation for momentum must suffice two criteria:

1. The principle of relativity (it should be impossible to differentiate between inertial reference frames)
2. At low speeds, the equation should reduce to the classical version

Linear momentum is therefore defined as:

$$\boldsymbol{\overrightarrow{p}}=\frac{m\boldsymbol{\overrightarrow{v}}}{\sqrt{1-\frac{v^2}{c^2}}}$$

Or, component-wise:

$$\boldsymbol{p_x}=\frac{m\boldsymbol{v_x}}{\sqrt{1-\frac{v^2}{c^2}}} \newline \boldsymbol{p_y}=\frac{m\boldsymbol{v_y}}{\sqrt{1-\frac{v^2}{c^2}}}$$

Note: the velocity, $v$, in the denominator is the velocity of the object with respect to a certain inertial reference frame, not the velocity of the reference frame itself.

### Kinetic Energy, $K$

In classical mechanics, work is defined as such:

$$W=\int Fdx=\int\frac{dp}{dt}~dx=\int\frac{dx}{dt}~dp=\int v~dp=pv-\int p~dv$$

Using the new definition for momentum, we get:

$$K=\frac{mv}{\sqrt{1-\frac{v^2}{c^2}}}v-\int_0^v \frac{mv}{\sqrt{1-\frac{v^2}{c^2}}}~dv=\frac{mv^2}{\sqrt{1-\frac{v^2}{c^2}}}+mc^2\sqrt{1-\frac{v^2}{c^2}}-mc^2 \newline K=\frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}}-mc^2$$

It may not look like it, but this simplifies to $K=\frac{1}{2}mv^2$ for small values of $v$.

### Relativistic Total Energy, $E$

Relativistic kinetic energy, $K$, can also be defined as such:

$$K=E-E_0$$

Where $E$ is the total relativistic energy and $E_0$ is the *rest energy*.

Total relativistic energy and rest energy are defined as:

$$E=\frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}} \newline E_0=mc^2$$

For high-energy collisions, kinetic energy is not always conserved (since rest energies can change), but total relativistic energy *is* always conserved.

Using the equation for momentum, we get another fundamental relationship:

$$E^2=(mc^2)^2+(pc)^2$$

For particles approaching the speed of light, energy can be approximated as:

$$E\cong pc$$

For massless particles (like light), energy is exactly defined as

$$E=pc$$

## Conservation Laws

In an isolated system of particles, the total linear momentum remains constant.

Classical collisions:

- For elastic collisions, the kinetic energy of the particles is the only form of energy
- For inelastic collisions, the extra energy is stored in the particles

Relativistic collisions:

- Internal stored energy contributes to rest energy
- Total energy consists of kinetic energy and rest energy
- The total amount of energy does not change

In an isolated system of particles, the total relativistic energy remains constant.