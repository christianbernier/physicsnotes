---
title: Intrinsic Spin
date: 2022-03-08
---

## Magnetic Dipole Moments

The separate components of the angular momentum vector, $\boldsymbol{\overrightarrow{L}}$, and $l$ of an atom can be determined from the interactions between an external magnetic field and the atom's *magnetic dipole moment*. However, performing this experiment will results in an unexpected property of the electron, called *intrinsic spin*.

### Orbital magnetic dipole moments

A classical magnetic dipole moment can be produced by a current loop or the orbital motion of a charged object. The **magnetic dipole moment**, denoted $\boldsymbol{\overrightarrow{\mu}}$, is a vector whose magnitude is equal to the product of the circulating current, $i$, and the area enclosed by the orbital loop. The direction of the vector is perpendicular to the orbital plane, using the right hand rule with the direction of conventional current.

### Relation to the angular momentum vector, $\boldsymbol{\overrightarrow{L}}$

Since quantum mechanics forbids exact knowledge about the angular momentum vector, it also forbids exact knowledge of the magnetic dipole moment vector. Only the $z$ components of these vectors can be known exactly. Note: since the electron has negative charge, $\boldsymbol{\overrightarrow{L}}$ and $\boldsymbol{\overrightarrow{\mu}}$ point in opposite directions.

Using the Bohr circular orbit model (which happens to be consistent with the quantum mechanical reality), we have a loop of current $i=dq/dt=q/T$, where $q$ is the charge of the particle ($-e$ for an electron) and $T$ is the time for one orbit. Assuming the electron moves with $v=p/m$ around a loop of radius $r$, its $T$ value will be $T=2\pi r/v=2\pi rm/p$. This means

$$\mu=iA=\frac{q}{2\pi rm/p}\pi r^2=\frac{q}{2m}rp=\frac{q}{2m}\left|\boldsymbol{\overrightarrow{L}}\right|$$

since $\left|\boldsymbol{\overrightarrow{L}}\right|=rp$. In vector notation, we get

$$\boldsymbol{\overrightarrow{\mu}}_{\text{L}}=-\frac{e}{2m}\boldsymbol{\overrightarrow{L}}$$

Note: the subscript on the dipole vector is a reminder that the vector comes from the *orbital* angular momentum $\boldsymbol{\overrightarrow{L}}$. The $z$ component of the vector is

$$\mu_{\text{L,z}}=-\frac{e}{2m}L_z=-\frac{e}{2m}m_l\hbar=-\frac{e\hbar}{2m}m_l=-m_l\mu_{\text{B}}$$

where

$$\mu_{\text{B}}=\frac{e\hbar}{2m}$$

This quantity, $\mu_{\text{B}}$, is called the *Bohr magneton* and is equal to about $9.274\times10^{-24}\text{J/T}$.

## Dipoles in External Fields

An *electric dipole* is two equal but opposite charges $q$ separated by a distance of $r$. The *electric dipole moment*, denoted $\boldsymbol{\overrightarrow{p}}$, has a magnitude equal to $qr$ and points from the negative charge to the positive one.

In a uniform external electric field, vertical forces $\boldsymbol{\overrightarrow{F}}_+$ and $\boldsymbol{\overrightarrow{F}}_-$ act on the charges. While the net force on the dipole is $0$, there is a torque applied to the system to make the dipole align with the field.

If the field is not uniform, the forces will not be equal, meaning there will be a net force on the dipole in addition to the torque. Another way of describing this is that if the dipole has $p_z\gt 0$ (assuming the electric field is pointing in the $z$ direction), its force will be in the negative $z$ direction and vice versa.

The same is true for a magnetic field and a magnetic dipole moment. A nonuniform magnetic field acting on the magnetic moments gives an unbalanced force that causes a displacement. In fact, if $\mu_z$ is positive, the force on the dipole is negative, and if $\mu_z$ is negative, the force on the dipole is positive.

## The Stern-Gerlach Experiment

### The setup

Imagine a beam of hydrogen atoms in the $n=2$, $l=1$ state ($m_l$ can be $-1$, $0$, or $+1$) incident on a screen. They pass through a slit then a nonuniform external magnetic field before hitting the screen. Assuming the experiment can be done before the atoms decay to the $n=1$ state, we would expect three lines to appear on the screen.

There should be one undeflected line for the $m_l=0$ atoms since they do not have a magnetic moment $\mu$. The atoms with $m_l=+1$ have $\mu_{\text{L,z}}=-\mu_{\text{B}}$, so they should be deflected upwards while the atoms with $m_l=-1$ have $\mu_{\text{L,z}}=\mu_{\text{B}}$, so they should be deflected downwards.

In short, we should always expect an odd number of lines on the screen (representing different $m_l$ values) since there are always $2l+1$ values $m_l$ can take on.

### Experimental results

Actually performing the experiment with hydrogen atoms in the $l=1$ state results in *six* lines appearing on the screen! Perhaps more confusingly, doing the experiment with atoms in the $l=0$ state results in *two* lines rather than the predicted one. In the $l=0$ state, $\boldsymbol{\overrightarrow{L}}$ has length $0$, so there should be no magnetic moment. However, this cannot be true since the atoms are deflected!

### What is going on here?

Following from the Schrödinger equation, atoms would need to have $l=1/2$ in order to produce two images. This is not true from how we have defined angular momentum thus far, but we can define another contributor to resolve the issue.

The *intrinsic angular momentum* of an electron is the hidden factor producing this oddity! An electron therefore has two kinds of angular momentum: its *orbital angular momentum*, $\boldsymbol{\overrightarrow{L}}$, and its *intrinsic angular momentum*, $\boldsymbol{\overrightarrow{S}}$. This new term, $\boldsymbol{\overrightarrow{S}}$, is typically called the **spin** of the electron.

## Spin

To resolve the strange results of the Stern-Gerlach experiment, we assign the *spin quantum number*, $s$, of an electron to $1/2$. With this spin, we also have the angular momentum vector $\boldsymbol{\overrightarrow{S}}$, a $z$ component, $\boldsymbol{S}_z$, an associated magnetic moment, $\boldsymbol{\overrightarrow{\mu}}_{\boldsymbol{S}}$, and a spin magnetic quantum number, $m_S$.

|                         | Orbital                         | Spin
|-------------------------|---------------------------------|-----
| Quantum number          | $l=0,1,2,...$                   | $s=1/2$
| Length of vector        | $\sqrt{l\left(l+1\right)}\hbar$ | $\sqrt{s\left(s+1\right)}\hbar=\sqrt{3/4}\hbar$        
| $z$-component           | $L_z=m_l\hbar$                  | $S_z=m_s\hbar$
| Magnetic quantum number | $m_l=0,\pm 1, \pm 2,...,\pm l$  | $m_s=\pm 1/2$
| Magnetic moment         | $\boldsymbol{\overrightarrow{\mu}}_{\text{L}} = -\left(e/2m\right)\boldsymbol{\overrightarrow{L}}$ | $\boldsymbol{\overrightarrow{\mu}}_{\text{S}} = -\left(e/m\right)\boldsymbol{\overrightarrow{S}}$

Using spin, we have an explanation for the results of the Stern-Gerlach and similar experiments. Every fundamental particle has a characteristic intrinsic spin and corresponding spin magnetic moment. The proton and neutron also have spin $1/2$ and the photon has a spin of $1$. Other particles such as pions (pi mesons) has spin $0$.