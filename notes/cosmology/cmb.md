---
title: Cosmic Microwave Background Radiation
date: 2022-04-22
---

## Universal Cooling

Since the universe is expanding, it must also be cooling (as a gas does when it expands). Going far enough back in time, we should see a universe so hot and dense that stable matter could not form. Eventually these particles would decay into stable matter and the photons involved could escape the hot "gas" of particles and photons of the early universe.

## Blackbody Radiation of the Universe

The wavelength spectrum of photons from the early universe resemble a blackbody of temperature $T$. Since these wavelengths expand as the universe expands, the temperature today should be around $5-10~\text{K}$, with photons of an energy $kT$ on the order of $10^{-3}~\text{eV}$ (microwaves).

Relating the number of photons $dN$ in the energy interval $dE$ around $E$ as the number per unit volume, we get

$$\frac{N\left(E\right)~dE}{V}=\frac{8\pi E^2}{\left(hc\right)^3}\frac{1}{e^{E/kT}-1}$$

Finding the total number of photons, we integrate over energy:

$$\frac{N}{V}=\frac{1}{V}\int_0^\infty N\left(E\right)~dE=\frac{8\pi}{\left(hc\right)^3}\int_0^\infty \frac{E^2~dE}{e^{E/kT}-1}=\frac{8\pi}{\left(hc\right)^3}\left(kT\right)^3\int_0^\infty \frac{x^2~dx}{e^x-1}$$

Solving for the standard integral, we find the number density to be around

$$N/V=\left(2.03\times10^7~\text{photons}/\text{m}^3\cdot\text{K}^3\right)T^3$$

Using the energy density formula, we find

$$U=\frac{8\pi^5k^4}{15\left(hc\right)^3}T^4=\left(4.72\times 10^3~\text{eV}/\text{m}^3\cdot\text{K}^4\right)T^4$$

The average energy per photon is therefore

$$E_\text{m}=\frac{U}{N/V}=\left(2.33\times 10^{-4}~\text{eV}/\text{K}\right)T$$

## Measuring the CMB

Using microwave antennae and space probes designed to measure the cosmic microwave background radiation, the temperature is found to be around $T=2.725~\text{K}$. It is also measured to be constant in all directions, filling the entire universe just after the Big Bang.