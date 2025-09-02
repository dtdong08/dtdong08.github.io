---
title: Biện luận về số cực trị của hàm số đa thức
published: 2025-09-02
updated: 2025-09-02
description: Biện luận về số điểm cực trị của hàm số đa thức được cho sẵn mà không cần tính đạo hàm
image: ''
tags: [ Đạo hàm, Khảo sát hàm số ]
category: Toán
draft:  false
---

Đề bài: Cho hàm số $y=f\left(x\right)=a \times (x-x_{1})^{k_{1}} \times (x-x_{2})^{k_{2}} \times (x-x_{3})^{k_{3}} \times \dots \times (x-x_{n})^{k_{n}} \,\, \left(a \neq 0; k_{i} \in \mathbb{N}^+\right)$. Tìm số điểm cực trị của hàm số $y=f\left(x\right)$.


Đặt $C$ bằng số $i$ sao cho $k_{i}$ chẵn.


Đặt $L$ bằng số $i$ sao cho $k_{i}$ lẻ.


Đặt $n=\sum i=C+L$.


Định nghĩa hàm $sgn\left(x\right)$ như sau:
- Nếu $x=0\implies sgn\left(x\right)=0$
- Nếu $x>0 \implies sgn\left(x\right)=1$
- Nếu $x<0 \implies sgn\left(x\right)=-1$


Ta có $\displaystyle \ln\left|f(x)\right|=\ln\left(\left|a\right| \times \prod_{i=1}^n\left|x-x_{i}\right|^{k_{i}} \right)=\ln\left|a\right|+\sum_{i=1}^n\left(k_{i}\times \ln\left|x-x_{i}\right|\right), \quad \forall x \notin \{x_{i}\}$


Đạo hàm hai vế trên ta có:
$$
\begin{aligned}
& \left(\ln\left|f\left(x\right)\right|\right)'=\sum_{i=1}^n\left(k_{i}\times\left(\ln\left|x-x_{i}\right|\right)'\right) \\
\iff & \dfrac{\left|f\left(x\right)\right|'}{\left|f\left(x\right)\right|}=\sum_{i=1}^n \left(k_{i}\times\dfrac{\left|x-x_{i}\right|'}{\left|x-x_{i}\right|}\right) \\
\iff & \dfrac{sgn\left(f\left(x\right)\right)\times f'\left(x\right)}{sgn\left(f\left(x\right)\right)\times f\left(x\right)}=\sum_{i=1}^n \left(k_{i}\times\dfrac{sgn\left(x-x_{i}\right)\times\left(x-x_{i}\right)'}{sgn\left(x-x_{i}\right)\times \left(x-x_{i}\right)}\right) \\
\iff & \dfrac{f'\left(x\right)}{f(x)}=\sum_{i=1}^n \left(k_{i}\times\dfrac{\left(x-x_{i}\right)'}{x-x_{i}}\right) \\
\iff & \dfrac{f'\left(x\right)}{f(x)}=\sum_{i=1}^n \left(k_{i}\times\dfrac{1}{x-x_{i}}\right) \\
\iff & \dfrac{f'\left(x\right)}{f(x)}=\sum_{i=1}^n \left(\dfrac{k_{i}}{x-x_{i}}\right) \\
\end{aligned}
$$


Đặt $\displaystyle g\left(x\right)=\dfrac{f'\left(x\right)}{f\left(x\right)}=\sum_{i=1}^n \left(\dfrac{k_{i}}{x-x_{i}}\right)$


Vậy nghiệm của $g\left(x\right)$ tương ứng với nghiệm của $f'\left(x\right)$ mà không phải nghiệm của $f\left(x\right)$

Ta lại có $\displaystyle g'\left(x\right) = \sum_{i = 1}^n\left(\dfrac{-k_{i}}{\left(x-x_{i}\right)^2}\right)=-\sum_{i = 1}^n\left(\dfrac{k_{i}}{\left(x-x_{i}\right)^2}\right) < 0 \quad \forall x \notin \{x_{i}\}$



Vậy $g\left(x\right)$ giảm đơn điệu trên mỗi khoảng $\left(x_{i}; x_{i+1}\right) \quad (1)$

Lại có $\displaystyle \lim_{x\to x_{i}^+} g(x) = \lim_{x\to x_{i}^+}\sum_{j=1}^n \left(\dfrac{k_{j}}{x-x_{j}}\right)=\lim_{x\to x_{i}^+}\left(\dfrac{k_i}{x-x_{i}}\right)+\lim_{x\to x_{i}^+}\left(\sum_{j=1, j\neq i }^n \left(\dfrac{k_{j}}{x-x_{j}}\right)\right)$


Ta thấy $\displaystyle \lim_{x\to x_{i}^+}\left(\dfrac{k_i}{x-x_{i}}\right) = +\infty$


Và $\displaystyle \lim_{x\to x_{i}^+}\left(\sum_{j=1, j\neq i }^n \left(\dfrac{k_{j}}{x-x_{j}}\right)\right)$ hữu hạn.


Vậy $\displaystyle \lim_{x\to x_{i}^+} g(x)=+\infty \quad (2)$


Chứng minh tương tự ta có $\displaystyle \lim_{x\to x_{i+1}^-} g(x)=-\infty \quad (3)$


Từ $\left(1\right), (2), (3) \implies$ có duy nhất một giá trị $x$ trong $\left(x_{i};x_{i+1}\right)$ là nghiệm của $g\left(x\right)$ và cũng là nghiệm của $f'\left(x\right)$. Có $n-1$ khoảng $\left(x_{i};x_{i+1}\right)$, vậy nên có $n-1$ nghiệm như vậy. $\left(I\right)$


Xét các nghiệm $x_{i}$ sao cho $k_{i} \geq 2$. 


Ta thấy rằng nếu $k_{i}$ chẵn thì trên đồ thị $y=f\left(x\right)$ sẽ tiếp xúc với trục $Ox$ tạo thành một cực trị.


Vậy có thêm $C$ điểm cực trị. $\left(II\right)$


Từ $\left(I\right)$ và $\left(II\right)$ ta có: Số điểm cực trị là $\left(n - 1\right)+C=C+L-1+C=2C+L-1$


Vậy đáp án là $\boxed{2C+L-1}$
