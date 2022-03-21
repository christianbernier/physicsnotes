---
title: The Hydrogen Molecule
date: 2022-03-17
---

## The Hydrogen Molecule Ion, $\text{H}_2^+$

Before examining how other molecules form, it is helpful to examine the simplest multi-atom molecule: the hydrogen molecule ion. This molecule is comprised of two hydrogen atoms but only one electron.

Knowing that a hydrogen atom is itself electrically neutral, it makes no sense to assume that the electron "belongs" to one of the hydrogen atoms when there is another proton present. Instead, for there to be some attractive force, the electron must spend a significant portion of its time in the region between the two protons (i.e. its probability density must have a large value in that region).

Starting from the fact that a hydrogen atom's electron's wave function is $\psi=\left(\pi a_0^3\right)^{-1/2}e^{-r/a_0}$, we imagine two protons close together, adding their wave functions, then squaring to find the probability density. There are two ways to add the wave functions: either the relative signs are the same or different. If the signs are the same, the resulting probability density makes sense because there is a significant probability that the electron is found between the protons. If the signs are different, this probability drops to 0 in between.

### Binding Energy

For a stable molecule to form, the Coulomb attraction between the electron and protons must overcome the Coulomb repulsion between the two protons.

The energy associated with the repulsion of two protons separated by a distance $R$ can be calculated as such:

$$U_p=\frac{e^2}{4\pi\epsilon_0R}$$

To find the energy associated with the electron's attraction to the two protons, first consider the protons far apart. Here, the electron is in its ground state around one of the protons, so its energy is $E=-13.6~\text{eV}$. As $R\rightarrow 0$, the molecule approximates an atom with $Z=2$. We know that the electron's energy in a hydrogen-like atom would therefore follow

$$E_n=\left(-13.6~\text{eV}\right)\frac{Z^2}{n^2}$$

where $n$ is the principle quantum number. Therefore, $E=-54.4~\text{eV}$ for the condition where $R=0$. The sum of the energies corresponding to the two wave functions is called $E_+$ and goes from $-13.6~\text{eV}$ at large $R$ to $-54.4~\text{eV}$ at small $R$.

For the combination of the differences in the wave functions leads to an energy $E_-$ which again has a value of $-13.6~\text{eV}$ for large $R$. This time, as $R\rightarrow 0$, the combined wave function also reaches $0$. The lowest energy level with a wave function that vanishes at $R=0$ is the $2p$ state, which has an energy of $-13.6~\text{eV}$ in a $Z=2$ hydrogen-like atom. Therefore, $E_-$ has an energy of $-13.6~\text{eV}$ for both large and small $R$.

The energy of a hydrogen molecule is the sum of the energy of the protons, $U_p$ and either $E_+$ or $E_-$. $U_p+E_-$ does not attain a minimum value and so does not represent a stable molecule. The sum $U_p+E_+$ does however, and the equilibrium condition occurs at the minimum value of $U_p+E_+$. This is about $R_{eq}=0.106~\text{nm}$, with an energy of $-16.3~\text{eV}$.

The *binding energy*, $B$, of $H_2^+$ is the energy needed to take apart the ion into $H$ and $H^+$, which corresponds to the depth of the potential energy minimum of $U_p+E_+$:

$$B=E\left(\text{H}+\text{H}^+\right)-E\left(\text{H}_2^+\right)=-13.6~\text{eV}-\left(-16.3~\text{eV}\right)=2.7~\text{eV}$$

Note that the fundamental concept that makes the hydrogen molecule stable is the *sharing* of the electron.

## The $\text{H}_2$ Molecule

We can construct a hydrogen molecule by considering two hydrogen atoms far apart, such that each one has an electron in its $1s$ state with an energy of $-13.6~\text{eV}$. Since they are far apart, there is no interaction between the two molecules. Once they are brought together, the electron wave functions overlap, representing the "sharing" of the electron between the two atoms. This can happen either by adding or subtracting the wave functions.

At $R=\infty$, the total energy of the two atoms is $-27.2~\text{eV}$. As the atoms are brought closer together, there will be two states possible (one where the wave functions are added and one where they are subtracted), but only one will lead to a stable molecule. the molecular state which leads to a stable molecule is called the *bonding state* and the one that does not lead to a stable state is called the *antibonding state*.

Due to the Pauli exclusion principle, it is possible for both electrons in a hydrogen molecule to occupy the space between the protons. The bonding state reaches a minimum of $E=-31.7~\text{eV}$ at $R=0.074~\text{nm}$. This gives a binding energy of

$$B=E\left(\text{H}+\text{H}\right)-E\left(\text{H}_2\right)=2\left(-13.6~\text{eV}\right)-\left(-31.7~\text{eV}\right)=4.5~\text{eV}$$