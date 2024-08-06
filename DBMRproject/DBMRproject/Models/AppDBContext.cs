using Microsoft.EntityFrameworkCore;


namespace DBMRproject.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    }
}
//namespace DBMRproject.Models
//{
//    public class AppDBContext
//    {
//    }
//}
