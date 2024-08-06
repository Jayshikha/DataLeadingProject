using System.ComponentModel.DataAnnotations;

namespace dataAssignment.Models
{
    public class folloUpTable
    {
        [Key]
        public int folloUpTableID { get; set; }
        public int leadID { get; set; }
        public string status { get; set; }
        public int collectedAmt { get; set; }
        public string comment { get; set; }
        public DateTime folloUpDate { get; set; }
    }
    public class LeadTable
    {
        [Key]
        public int leadID { get; set; }
        public string name { get; set; }
        public string emailID { get; set; }
        public int phoneNumber { get; set; }
        public DateTime createDate { get; set; }

    }
}
