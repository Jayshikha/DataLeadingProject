using Microsoft.EntityFrameworkCore;
using dataAssignment.Models;
using System.Collections.Generic;

namespace dataAssignment.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }


        public DbSet<folloUpTable> folloUpTable { get; set; }
        public DbSet<LeadTable> LeadTable { get; set; }

    }
}
