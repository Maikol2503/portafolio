import cv2
import numpy as np

# Cargar la imagen
# image = cv2.imread('184.png')
image = cv2.imread('185.png')
# image = cv2.imread('186.png')

# Convierte la imagen a espacio de color HSV
image_hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# Define rangos de color para el rojo, amarillo y verde en el espacio de color HSV
rojo_claro= np.array([0, 100, 100])
rojo_oscuro= np.array([10, 255, 255])

amarillo_claro = np.array([20, 100, 100])
amarillo_oscuro= np.array([30, 255, 255])

verde_claro= np.array([40, 100, 100])
verde_oscuro = np.array([80, 255, 255])

# Segmentar el semáforo con las máscaras
mask_red = cv2.inRange(image_hsv, rojo_claro, rojo_oscuro)
mask_yellow = cv2.inRange(image_hsv, amarillo_claro, amarillo_oscuro)
mask_green = cv2.inRange(image_hsv, verde_claro, verde_oscuro)

# se verifica si hay píxeles rojos, amarillos o verdes en las máscaras
if cv2.countNonZero(mask_red) > 0:
    print("El semáforo está en ROJO.")
elif cv2.countNonZero(mask_yellow) > 0:
    print("El semáforo está en AMARILLO.")
elif cv2.countNonZero(mask_green) > 0:
    print("El semáforo está en VERDE.")
else:
    print("El semáforo está en un estado desconocido o no se detecta.")

# Muestro las imagenes
cv2.imshow('Imagen Original', image)
cv2.imshow('Máscara Roja', mask_red)
cv2.imshow('Máscara Amarilla', mask_yellow)
cv2.imshow('Máscara Verde', mask_green)
cv2.waitKey(0)
cv2.destroyAllWindows()

