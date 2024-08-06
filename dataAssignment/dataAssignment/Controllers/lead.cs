using dataAssignment.Data;
using dataAssignment.Models;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace dataAssignment.Controllers
{
    public class lead : Controller
    {
        private readonly AppDbContext _context;

        public lead(AppDbContext context)
        {
            _context = context;
        }



        public IActionResult createfollowTable(string status, int leadid, string comment, int amt)
        {
            var data = new folloUpTable();
            {
                data.leadID = leadid;
                data.status = status;
                data.collectedAmt = amt;
                data.comment = comment;
                data.folloUpDate = DateTime.Now;
            }

            _context.folloUpTable.Add(data);
            _context.SaveChanges();
            return Ok(new
            {
                error = false,
                result = "Data Created",
            });
        }



        public IActionResult create( string name, int phoneNumber, string EmailID)
        {
            var data = new LeadTable();
            {
                data.name = name;
                data.phoneNumber = phoneNumber;
                data.emailID = EmailID;
                data.createDate = DateTime.Now;
            }
            _context.LeadTable.Add(data);
            _context.SaveChanges();
            return Ok(new
            {
                error = false,
                result = "Data Created",
            });
        }


        public IActionResult deleteFollowUp(int followUpID)
        {
            var data = _context.folloUpTable.Find(followUpID);

            _context.folloUpTable.Remove(data);
            _context.SaveChanges();


            return Ok(new
            {
                error = false,
                result = "Data Deleted",
            });
        }



        public IActionResult delete(int leadID)
        {
            var data = _context.LeadTable.Find(leadID);

            _context.LeadTable.Remove(data);
            _context.SaveChanges();


            return Ok(new
            {
                error = false,
                result = "Data Deleted",
            });
        }

        public IActionResult EditfollowUp(int followUpID, string status, int colledAmt, string comment)
        {
            var data = _context.folloUpTable.Find(followUpID);
            data.status = status;
            data.collectedAmt = colledAmt;
            data.comment = comment;
            _context.SaveChanges();

            return Ok(new
            {
                error = false,
                result = "Data UpDated",
            });
        }

        public IActionResult Edit(int leadID ,string name ,int phoneNumber,string EmailID)
        {
            var data = _context.LeadTable.Find(leadID);
            data.emailID = EmailID;
            data.phoneNumber=phoneNumber;
            data.name = name;
            _context.SaveChanges();

            return Ok(new
            {
                error = false,
                result = "Data UpDated",
            });
        }
        public IActionResult GetLeadData()
        {
            var data = _context.LeadTable;
            //return Ok(data);

            return Ok(new { 
             error=false,
             result=data, 
            });
            //return View(data);
        }

    }
}
