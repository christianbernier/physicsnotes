---
title: Electrical Conduction
date: 2022-03-25
---

## Current Flow in Metals

When an electric field $\boldsymbol{\overrightarrow{E}}$ is applied to a metal, a current flows in the direction of the field. The flow of electrons is described by a current density $\boldsymbol{\overrightarrow{j}}$, which is the current per unit cross-sectional area. In an ordinary metal, the current density is proportional to the electric field:

$$\boldsymbol{\overrightarrow{j}}=\sigma\boldsymbol{\overrightarrow{E}}$$

where $\sigma$ is the **electrical conductivity** of the material.

In a metal, the electrons in the metals "electron gas" experience a force $\boldsymbol{\overrightarrow{F}}=-e\boldsymbol{\overrightarrow{E}}$ and therefore an acceleration of $-e\boldsymbol{\overrightarrow{E}}/m$.

However, in a metal, we observe a steady current, meaning the increase in velocity from the electric field is counteracted by collisions with the lattice. In this model of conduction, electrons experience acceleration due to the electric field for short periods of time and are slowed by collisions. This results in some *drift velocity*, $\boldsymbol{\overrightarrow{v}}_d$ given by the acceleration times the average time $\tau$ between collisions:

$$\boldsymbol{\overrightarrow{v}}_d=\frac{-e\boldsymbol{\overrightarrow{E}}}{m}\tau$$

The magnitude of the current density is then determined by the number of number of charge carriers and their average speed:

$$\boldsymbol{\overrightarrow{j}}=ne\boldsymbol{\overrightarrow{v}}_d$$

where $n$ is the density of electrons available for conduction. Using the equation for drift velocity,

$$\boldsymbol{\overrightarrow{j}}=\frac{ne^2\tau}{m}\boldsymbol{\overrightarrow{E}}$$

meaning the conductivity is

$$\sigma=\frac{ne^2\tau}{m}$$

The factor $\tau$ can be expressed as

$$\tau=\frac{l}{v_{\text{av}}}$$

where $l$ is the *mean free path* of electrons (average distance the electrons travel) and $v_{\text{av}}$ is the average speed through the lattice (not the same as the drift speed, which is the small increment of speed from applying the electric field).

Note: this theory of conduction is not very accurate to the real world (off by an order of magnitude and the wrong temperature dependence). The quantum theory of electrical conduction provides a much more accurate description of reality.