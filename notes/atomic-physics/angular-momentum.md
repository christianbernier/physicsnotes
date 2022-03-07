---
title: Angular Momentum in a Hydrogen Atom
date: 2022-03-06
---

## Bohr Model

Bohr based his electron orbitals on the concept of electrons having discrete angular momentum values, based on a quantum number $n$, equal to $n\hbar$. While this does have some correct aspects, it turns out to not be consistent with quantum mechanics.

## Classical Orbits

The angular momentum of a particle is represented by the vector equation $\boldsymbol{\overrightarrow{L}}=\boldsymbol{\overrightarrow{r}}\times\boldsymbol{\overrightarrow{p}}$, where $\boldsymbol{\overrightarrow{r}}$ is the position vector of the particle and $\boldsymbol{\overrightarrow{p}}$ is the linear momentum of that particle. The direction of $\boldsymbol{\overrightarrow{L}}$ is always perpendicular to the orbital plane. The principle of *conservation of angular momentum* states that the total angular momentum of the system remains constant.

While different orbits can have the same total energy, the angular momentum (both direction and magnitude) can uniquely describe an orbit. The angular momentum can be represented by three numbers (the components of $\boldsymbol{\overrightarrow{L}}$): $L_x$, $L_y$, and $L_z$. Another way to represent $\boldsymbol{\overrightarrow{L}}$ would be its magnitude and two angular coordinates for direction.

## Angular Momentum in Quantum Mechanics

A three-dimensional wave function has angular momentum properties described by two quantum numbers. The first is the *angular momentum quantum number $l$*. The length of the angular momentum vector is described by $l$:

$$\left|\boldsymbol{\overrightarrow{L}}\right|=\sqrt{l\left(l+1\right)}\hbar~~~~~~~~\left(l=0,1,2,...\right)$$

Note that this definition, unlike the Bohr definition, allows for an angular momentum of $0$.

The other quantum number used to describe angular momentum is the *magnetic quantum number $m_l$*. It describes one component of the angular momentum vector (usually $z$) and is described as

$$L_z=m_l\hbar~~~~~~~~\left(m_l=0,\pm 1,\pm 2,...,\pm l\right)$$

This results in $2l+1$ possible values for $m_l$ for each given $l$. And while the two numbers $l$ and $m_l$ cannot describe a three-dimensional vector for angular momentum, the missing part of the description of quantum angular momentum is related to the uncertainty principle.

Since $m_l$ can only take certain values for a given $l$, the polar angle $\theta$ can only take certain values:

$$\cos{\theta}=\frac{L_z}{\left|\boldsymbol{\overrightarrow{L}}\right|}=\frac{m_l}{\sqrt{l\left(l+1\right)}}$$

This is called *spatial quantization*. The number of possible orientations is $2l+1$ due to the possible number of $m_l$ values. This is different than classical angular momentum, where angular momentum vectors can take any direction.

## Angular Momentum Uncertainty

In quantum mechanics, the maximum amount of permitted information about the angular momentum vector is its length and $z$ component. Since a three-dimensional vector requires three numbers to fully describe it, we are always missing some informaiton about the angular momentum. Knowing $\left|\boldsymbol{\overrightarrow{L}}\right|$ and $L_z$ exactly results in $0$ information for $L_x$ and $L_y$ besides the fact that $\left|\boldsymbol{\overrightarrow{L}}\right|=L_x^2+L_y^2+L_z^2$. This results in the tip of the $\boldsymbol{\overrightarrow{L}}$ vector precessing around the $z$ axis, observed as a "smeared out" distribution of $L_x$ and $L_y$ values.

This uncertainty can be described by the following uncertainty relationship:

$$\Delta L_z\Delta\phi\geq\hbar$$

where $\phi$ is the azimuthal angle from the $x$-axis to $\boldsymbol{\overrightarrow{L}}$. In other words, if one component of $\boldsymbol{\overrightarrow{L}}$ is completely known, the other two are completely undertermined.

This is why the length of the angular momentum vector cannot be defined as $l\hbar$: if this was true, it would be possible to know exactly the length and direction of the angular momentum, violating the uncertainty principle.