---
title: Cosmology and General Relativity
date: 2022-04-22
---

## Measuring the Universe

The equations of general relativity can be used to measure certain properties of the universe. However, the mass-energy density must be measured for the whole universe, at a scale large compared to the spacing between galaxies. However, the universe's density decreases as it expands.

Solving the equation for the large-scale structure of the universe gives the Friedmann equation:

$$\left(\frac{dR}{dt}\right)^2=\frac{8\pi}{3}G\rho R^2-kc^2$$

where $R\left(t\right)$ is the size or distance scale factor of the universe at time $t$ and $\rho$ is the total mass-energy density at that time. The $k$ is a geometrical constant of the universe. If $k=0$, the universe is flat. If $k=+1$, the universe is curved and closed. If $k=-1$, the universe is curved and open.

At large scales, the universe appears to be flat, so $k=0$ is used. The $\rho$ term must include both matter and radiation. Since the universe expands, the matter density $\rho_\text{m}$ decreases with radius: $\rho_\text{m}\propto R^{-3}$. Solving for $R\left(t\right)$, we get

$$R\left(t\right)=At^{2/3}$$

where $A$ is a constant. We can use this to eliminate $R$, getting

$$t=\frac{1}{\sqrt{6\pi G\rho_\text{m}}}$$

In the early universe, radiation dominated. We know the energy density depends on $d\lambda/\lambda^5$, and since all wavelengths scale with $R$, we know $d\lambda\propto R$ and $\lambda^5\propto R^5$. Therefore, $\rho_\text{r}\propto R^{-4}$. Integrating, we find

$$R\left(t\right)=A't^{1/2}$$

where $A'$ is a constant, so

$$t=\frac{3}{\sqrt{32\pi G\rho_\text{r}}}$$

Finally, we can define the Hubble parameter in terms of the time variation of the scale factor:

$$H=\frac{1}{R}\frac{dR}{dt}$$