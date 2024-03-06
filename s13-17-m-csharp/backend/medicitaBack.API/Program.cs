using medicitaBack.BLL.contrato;
using medicitaBack.BLL.Service;
using medicitaBack.DAL.Contrato;
using medicitaBack.DAL.Dbcontext;
using medicitaBack.DAL.Repository;
using medicitaBack.Models.Entidades;
using medicitaBack.Models.Utilidades;
using medicitaBack.Models.VModels.EspecialidadDTO;
using medicitaBack.Models.VModels.DatosDTO;
using medicitaBack.Models.VModels.CitaDTO;
using medicitaBack.Models.VModels.MedicoDTO;
using medicitaBack.Models.VModels.Lista_CitaDTO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



builder.Services.AddDbContext<AplicationDBcontext>(option =>

    option.UseSqlServer(builder.Configuration.GetConnectionString("SQLServerConnection"), p => p.MigrationsAssembly("medicitaBack.API"))
    
);

builder.Services.AddIdentity<Usuario, IdentityRole>(option => { option.Password.RequireNonAlphanumeric = false; option.User.RequireUniqueEmail = true; }).AddEntityFrameworkStores<AplicationDBcontext>().AddDefaultTokenProviders();

var MisReglasCors = "ReglasCors";
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: MisReglasCors, builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

//Configuraci�n para validar el token
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opciones =>
{
    opciones.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = false,
        ValidateAudience = false,        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["llaveJwt"])),
        ClockSkew = TimeSpan.Zero
    };
});

builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {

        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header

    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {

            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                Type  = ReferenceType.SecurityScheme,
                Id = "Bearer"

                }
            },

            new string[]{}

        }

    });


});

//Configuracion Automapper

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));


//Inyeccion de Dependencia

builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<ITokenService, TokenService>();

//Especialidad
builder.Services.AddScoped<IGenericRepository<CreacionEspecialidadDTO,EspecialidadDTO,Especialidad>,EspecialidadRepository>();
builder.Services.AddScoped<IGenericService<CreacionEspecialidadDTO,EspecialidadDTO>, EspecialidadService>();
//Datos
builder.Services.AddScoped<IGenericRepository<CreacionDatosDTO, DatosDTO, Datos>, DatosRepository>();
builder.Services.AddScoped<IGenericService<CreacionDatosDTO, DatosDTO>, DatosService>();
builder.Services.AddScoped<IDatosService, DatosService>();

//Medico

builder.Services.AddScoped<IMedicoRepository, MedicoRepository>();
builder.Services.AddScoped<IMedicoService, MedicoService>();

//Cita
builder.Services.AddScoped<IGenericRepository<CreacionCitaDTO, CitaDTO, Cita>, CitasRepository>();
builder.Services.AddScoped<ICitaService, CitaService>();
builder.Services.AddScoped<ICitaBusquedaRepository, CitasRepository>();
//Lista_Citas Cita
builder.Services.AddScoped<IGenericRepository<CreacionLista_CitaDTO, Lista_CitaDTO, Lista_Cita>, Lista_CitasRepository>();
builder.Services.AddScoped<IGenericService<CreacionLista_CitaDTO, Lista_CitaDTO>, Lista_CitaService>();

//Data Seeder


//Email
builder.Services.AddScoped<IEmailService, EmailService>();


builder.Services.AddScoped<IDataSeeder, DataSeeder>();
//Cita
builder.Services.AddScoped<ICitaRepository, HistorialCitaRepository>();



var app = builder.Build();






using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var dataSeeder = services.GetRequiredService<IDataSeeder>();
        await dataSeeder.CrearRoles();
        await dataSeeder.CrearUsuarioAdmin();
        await dataSeeder.CrearCategorias();
    }
    catch (Exception)
    {


    }
}

//Db migration
/*
using (var scope = app.Services.CreateScope()) 
{
    var Context = scope.ServiceProvider.GetRequiredService<AplicationDBcontext>();
    Context.Database.Migrate();
}
*/

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(MisReglasCors);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
