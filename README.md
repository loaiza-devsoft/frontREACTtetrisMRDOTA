src/
│
├── app/                          # Configuración principal de la app
│   ├── App.tsx                   # Punto de entrada de la aplicación
│   ├── Router.tsx                # Configuración de rutas
│   └── app.css                   # Estilos globales
│
├── entities/                     # Modelos y lógica de negocio base
│   └── usuario/
│       ├── model/
│       │   └── types.ts          # Tipado de Usuario
│       └── api/
│           └── usuarioApi.ts     # API de usuario
│
├── features/                     # Funcionalidades específicas (casos de uso)
│   └── auth/
│       ├── api/
│       │   └── authApi.ts        # Llamadas a la API de autenticación
│       ├── hooks/
│       │   ├── useLogin.ts       # Hook para login
│       │   └── useRegister.ts    # Hook para registro
│       └── ui/
│           ├── LoginForm.tsx     # Componente del formulario de login
│           └── RegisterForm.tsx  # Componente del formulario de registro
│
├── pages/                        # Páginas completas (secciones del router)
│   ├── loginPage/
│   │   └── Login.tsx             # Página de login
│   └── registerPage/
│       └── Register.tsx          # Página de registro
│
└── shared/                       # Utilidades y recursos compartidos
    ├── api/
    │   └── axiosClient.ts        # Configuración de axios
    └── endPoints.ts              # Endpoints de la API
