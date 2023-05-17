import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  selectedCompany: any;
  selectedStation: any;
  selectedStatus: any;
  applyFilter() {
    throw new Error('Method not implemented.');
  }
  searchQuery: any;
  selectedOption!: string;
  constructor() {}
  users: any = [
    {
      userId: 7,
      username: 'ngotta',
      fullName: 'Clinton Ngotta',
      email: 'ngotta@ufanisi.co.ke',
      empNo: 'UFAN409',
      idNo: '31358484',
      password: 'Tech@404',
      role: 'super-admin',
      status: 'active',
      company: 'UFKL',
      station: 'Mombasa',
      permissions: {
        pages: [
          {
            home: true,
          },
          {
            profile: true,
          },
          {
            payments: true,
          },
          {
            reports: true,
          },
          {
            users: true,
          },
          {
            settings: true,
          },
        ],
        actions: [
          {
            canAddUser: true,
          },
          {
            canAddVehicle: true,
          },
        ],
      },
      createdAt: 1681997600000,
      updatedAt: 1681997600000,
    },
    {
      userId: 8,
      username: 'Clenice',
      fullName: 'Clenice',
      email: 'Clenice@ufanisi.co.ke',
      empNo: 'UFAN409',
      idNo: '31358484',
      password: 'Tech@404',
      role: 'user',
      status: 'inactive',
      company: 'UCSL',
      station: 'Kericho',
      permissions: {
        pages: [
          {
            home: true,
          },
          {
            profile: true,
          },
          {
            payments: true,
          },
          {
            reports: true,
          },
          {
            users: true,
          },
          {
            settings: true,
          },
        ],
        actions: [
          {
            canAddUser: true,
          },
          {
            canAddVehicle: true,
          },
        ],
      },
      createdAt: 1681997600000,
      updatedAt: 1681997600000,
    },
    {
      userId: 9,
      username: 'clinton',
      fullName: 'Clinton Minya',
      email: 'ngotta@gmail.com',
      empNo: 'UFAN409',
      idNo: '31358484',
      password: 'Tech@404',
      role: 'admin',
      status: 'inactive',
      company: 'ULL',
      station: 'Nairobi',
      permissions: {
        pages: [
          {
            home: true,
          },
          {
            profile: true,
          },
          {
            payments: true,
          },
          {
            reports: true,
          },
          {
            users: true,
          },
          {
            settings: true,
          },
        ],
        actions: [
          {
            canAddUser: true,
          },
          {
            canAddVehicle: true,
          },
        ],
      },
      createdAt: 1681997600000,
      updatedAt: 1681997600000,
    },
  ];
  get filteredUsers() {
    if (!this.searchQuery) {
      return this.users; // if search query is empty, return all users
    }
    return this.users.filter((user: { [x: string]: string }) => {
      const searchValue = this.searchQuery.toLowerCase();
      const userValue = user[this.selectedOption].toLowerCase();
      return userValue.includes(searchValue);
    });
  }
  ngOnInit() {}
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.page.html',
//   styleUrls: ['./users.page.scss'],
// })
// export class UsersPage implements OnInit {
//   selectedCompany: any;
//   selectedStation: any;
//   selectedStatus: any;
//   searchTerms: string[] = [];
//   users: any = [
//     // your user data array
//   ];
//   searchQuery: any;

//   // add this method to filter the user array based on search terms
//   filterUsers() {
//     return this.users.filter(
//       (user: { fullName: string; email: string; station: string }) => {
//         return this.searchTerms.every((term) => {
//           return (
//             user.fullName.toLowerCase().includes(term.toLowerCase()) ||
//             user.email.toLowerCase().includes(term.toLowerCase()) ||
//             user.station.toLowerCase().includes(term.toLowerCase())
//           );
//         });
//       }
//     );
//   }

//   // this method will be called whenever the search terms change
//   updateFilter(searchTerms: string[]) {
//     this.searchTerms = searchTerms;
//   }

//   ngOnInit() {}
// }
