---
title: Radial Probability Densities
date: 2022-03-06
---

## Why Radial Probability?

The full three-dimensional probability function can be useful, but to analyze the probability an electron is a certain distance from the nucleus, the *radial probability density* is more useful.

Imagine a spherical shell of radius $r$ and thickness $dr$. The radial probability function, $P\left(r\right)$, is the probability of finding the electron in that shell. We define this function by integrating over the polar and azimuthal angles:

$$P\left(r\right)=\left|R_{n,l}\left(r\right)\right|^2r^2~dr\int_0^\pi\left|\Theta_{l,m_l}\left(\theta\right)\right|^2\sin{\theta}~d\theta\int_0^{2\pi}\left|\Phi_{m_l}\left(\phi\right)\right|^2~d\phi$$

Since the polar and azimuthal functions are normalized, however, the integrals of $\Theta$ and $\Phi$ are equal to unity. This means

$$P\left(r\right)=r^2\left|R_{n,l}\left(r\right)\right|^2~dr$$

Note that as $r\rightarrow 0$, $P\left(r\right)\rightarrow 0$ even if $R\left(r\right)$ does not go to 0 since the volume becomes zero even if the *probability density* is positive.

## Average Distance

Analyzing the radial probability densities for different principle quantum numbers, it appears that the quantum number $n$ largely determines the average distance much more so than the quantum number $l$.

For any value of $n$, the smaller the $l$, the more time the electron spends close and far from the nucleus (just like a planet orbiting with small angular momentum values).