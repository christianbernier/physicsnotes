---
title: Thermal Radiation
date: 2022-02-01
---

## What is Thermal Radiation?

Thermal radiation is the electromagnetic radiation emitted by all objects becuase of their temperature.

Thermal radiation is usually in the infrared region, but sometimes objects are so hot that their radiation is visible light.

### Thermal radiation experiments

Experiments were conducted to try to measure how the intensity of the radiation changed as a function of wavelength.

The experiments uncovered two characteristics:

1. The total intensity radiated increases as the temperature increases (hotter objects glow brighter)

2. The maximum wavelength, $\lambda_{max}$ decreases as the temperature increases (the wavelength of light is inversely proportional to the temperature)

$$I=\sigma T^4$$

where $\sigma$ is the *Stefan-Boltzmann constant*, about $5.67037*10^{-8} W/m^2*K^4$.

### Wein's displacement law

The maximum wavelength of radiation is inversely proportional to the temperature of the object.

$$\lambda_{max}T=2.8978*10^{-3} m*K$$

Hot objects are first red, then white, then blue.

### Blackbody radiation

A **blackbody** is an object which absorbs all radiation incident on it and reflects none of the incident radiation.

Physicists consider a cavity filled with electromagnetic radiation in thermal equilibrium with its walls at temperature $T$ as the ideal blackbody.

The radiation inside the box has an energy density of $u(\lambda)$, as a function of its wavelength.

At any given time, half of the radiation moves away from the hole and half moves towards it, at speed $c$. However, because the radiation travels at all sorts of angles, the energy flowing perpendicular to the surface of the hole is $1/2$ of the total.

$$I(\lambda)=\frac{c}{4}u(\lambda)$$

To find the total intensity between two wavelengths $\lambda_1$ and $\lambda_2$, we use:

$$I(\lambda_1 : \lambda_2) = \int_{\lambda_1}^{\lambda_2} I(\lambda)~d\lambda$$

The total emitted intensity is therefore

$$I=\int_0^{\infty} I(\lambda) ~d\lambda$$

## Classical Theory of Thermal Radiation

Classical assumptions yield the following theories:

1. Blackbody boxes are filled with standing waves (since there is no electric field inside a metal box)
2. For a box of volume $V$, the following equation gives the number of standing waves:

$$N(\lambda)~d\lambda=\frac{8\pi V}{\lambda^4} ~d\lambda$$

3. Each wave contributes an average energy of $kT$ to the radiation in the box.

Therefore, classical physics calculates the total energy density of radiation as follows:

$$u(\lambda) ~d\lambda = \frac{N(\lambda)~d\lambda}{V} kT=\frac{8\pi}{\lambda^4}kT~d\lambda$$

And the intensity per unit wavelength (Rayleigh-Jeans formula):

$$I(\lambda)=\frac{c}{4}u(\lambda)=\frac{c}{4}\frac{8\pi}{\lambda^4}kT=\frac{2\pi c}{\lambda^4}kT$$

This equation results in the prediction that wavelengths decrease to $0$ as the energy increases, which is not true. This is called the *ultraviolet catastrophe*.

## Quantum Theory of Thermal Radiation

Max Planck tried to fix the ultraviolet catasrophe, and used a new physical theory called **quantum physics**, led by **wave mechanics** also known as **quantum mechanics**.

Quantum physics is based on the idea that an oscillating atom can absorb and emit energy only as discrete bundles.

In Planck's theory, the energy can only be integer multiples of a certain base quantity of energy:

$$E_n=n\epsilon, n=1, 2, 3...$$

Where

$$\epsilon=hf$$

$h$ is known as **Planck's constant**.

Planck's ideas predict the number of oscillators with energy $E_n$ is

$$N_n=N(1-e^{-\epsilon/kT})e^{-n\epsilon/kT}$$

Therefore,

$$E_{av}=\frac{1}{N}\sum_{n=0}^\infty N_n E_n=(1-e^{-\epsilon/kT})\sum_{n=0}^\infty (n\epsilon)e^{-n\epsilon/kT}$$

So

$$E_{av}=\frac{\epsilon}{e^{\epsilon/kT} - 1}=\frac{hf}{e^{hf/kT} - 1}=\frac{hc/\lambda}{e^{hc/\lambda kT} - 1}$$

The intensity of the radiation becomes

$$I(\lambda) = \frac{c}{4}\left(\frac{8\pi}{\lambda^4}\right)\left[\frac{hc/\lambda}{e^{hc/\lambda kT} - 1}\right]=\frac{2\pi hc^2}{\lambda^5}\frac{1}{e^{hc/\lambda kT} - 1}$$

The relationship between the stefan-Boltzmann constant and Planck's constant:

$$\sigma=\frac{2\pi^5k^4}{15c^2h^3}$$

Using the equations above, it is possible to determine the temperature of an object using only one wavelength of its thermal radiation. A *radiometer* measures the intensity of specific wavelengths of thermal radiation.