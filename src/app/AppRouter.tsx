import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { Box } from '@mui/material';

export const AppRouter = () => {
  return (
    <Routes>
      {/*Main route*/}
      <Route path="/" element={<Home />}>
        {/*Patients*/}
        <Route
          path="patients/*"
          element={<PageLinkTest name="Patients main" />}
        >
          {/*Create new patient*/}
          <Route path="edit" element={<PageLinkTest name="Patients edit" />}>
            <Route
              path="detail"
              element={<PageLinkTest name="Patients edit detail" />}
            />
          </Route>
          {/*List patients*/}
          <Route path="list" element={<PageLinkTest name="Patients list" />}>
            <Route
              path="education"
              element={<PageLinkTest name="Education" />}
            />
          </Route>
          {/*Appointments*/}
          <Route
            path="appointments/*"
            element={<PageLinkTest name="Patients Appointments" />}
          >
            <Route
              path="types"
              element={<PageLinkTest name="Appointment types" />}
            />
          </Route>
          {/*Schedule*/}
          <Route
            path="schedule"
            element={<PageLinkTest name="Patient schedule" />}
          >
            <Route
              path=":patientid"
              element={<PageLinkTest name="Patient schedule id" />}
            />
          </Route>

          {/*RPM Medical*/}
          <Route
            path="medical"
            element={<PageLinkTest name="RPM - Medical" />}
          />
          {/*Patients Dashboard*/}
          <Route
            path="dashboard/*"
            element={<PageLinkTest name="Patients dashboard" />}
          >
            <Route
              path="vital-signs"
              element={<PageLinkTest name="Vital Signs" />}
            />
          </Route>

          {/*Consent*/}
          <Route path="consent/*" element={<PageLinkTest name="Consent" />}>
            <Route path="list" element={<PageLinkTest name="Consent list" />} />
          </Route>

          {/*Practice settings*/}
          <Route
            path="practice-settings"
            element={
              <PageLinkTest name="Practice settings / Vitals reference ranges" />
            }
          />

          {/*Population groups */}
          <Route
            path="population-groups"
            element={<PageLinkTest name="Population groups" />}
          />

          {/*Referring providers */}
          <Route
            path="referring-providers"
            element={<PageLinkTest name="Referring providers" />}
          />

          {/* Goal set */}
          <Route path="goal-set/*" element={<PageLinkTest name="Goal set" />}>
            <Route
              path="list"
              element={<PageLinkTest name="Goal set list" />}
            />
          </Route>

          {/* Voice calls reports */}
          <Route
            path="reports/*"
            element={<PageLinkTest name="Patient reports" />}
          >
            <Route
              path="voice-recordings"
              element={<PageLinkTest name="Voice recordings" />}
            />
          </Route>

          {/*Prs*/}
          <Route path="prs/*" element={<PageLinkTest name="Prs" />}>
            <Route
              path="medicaldevice/*"
              element={<PageLinkTest name="Medical devices" />}
            >
              <Route
                path="list"
                element={<PageLinkTest name="Medical devices list" />}
              />
            </Route>
          </Route>

          {/*Interoperability*/}
          <Route
            path="interoperability"
            element={<PageLinkTest name="Interoperability" />}
          />

          {/*Analytics api calls*/}
          <Route
            path="analyticsapicalls"
            element={<PageLinkTest name="Analytics api calls" />}
          />

          {/*Reports*/}
          <Route
            path="reports/*"
            element={<PageLinkTest name="Reports main" />}
          >
            {/*Reports inbox*/}
            <Route
              path="inbox"
              element={<PageLinkTest name="Reports inbox" />}
            />
            {/*Reports dashboard*/}
            <Route
              path="dashboard"
              element={<PageLinkTest name="Reports dashboard" />}
            />
            {/*Patients reports*/}
            <Route
              path="medicare-time-tracking"
              element={<PageLinkTest name="Patients reports" />}
            />
            {/*Compliant patients reports*/}
            <Route
              path="compliant-patients"
              element={<PageLinkTest name="Compliant patients" />}
            />
            {/*Compliant patients reports*/}
            <Route
              path="blood-pressure-improvement"
              element={<PageLinkTest name="Blood pressure improvement" />}
            />
          </Route>
        </Route>
        {/*End of patients routes*/}

        {/*Physician*/}
        <Route path="physician" element={<PageLinkTest name="Physician" />}>
          <Route
            path="list"
            element={<PageLinkTest name="Physicians list" />}
          />
        </Route>

        {/*Dashboard*/}
        <Route
          path="dashboard/*"
          element={<PageLinkTest name="Dashboard main" />}
        >
          <Route
            path="medicaltelehealth/*"
            element={<PageLinkTest name="Dashboard - Medical Telehealth" />}
          >
            <Route
              path="home"
              element={
                <PageLinkTest name="Dashboard - Medical Telehealth - Home" />
              }
            />
          </Route>
        </Route>

        {/*Tasks*/}
        <Route path="task-list" element={<PageLinkTest name="Task list" />} />

        {/*Billing*/}
        <Route path="billing/*" element={<PageLinkTest name="Billing" />}>
          <Route path="claims" element={<PageLinkTest name="Claims" />} />
        </Route>

        {/*clinic*/}
        <Route path="clinic/*" element={<PageLinkTest name="Clinic" />}>
          <Route
            path="telehealth/*"
            element={<PageLinkTest name="Telehealth" />}
          >
            <Route path="logs/*" element={<PageLinkTest name="Logs" />}>
              <Route
                path="list"
                element={<PageLinkTest name="List / Report telehealth" />}
              />
            </Route>
          </Route>
        </Route>

        {/*Settings*/}
        <Route path="settings/*" element={<PageLinkTest name="Settings" />}>
          <Route path="providers/*" element={<PageLinkTest name="Providers" />}>
            <Route path="list" element={<PageLinkTest name="List" />} />
            <Route
              path="fee-schedule"
              element={<PageLinkTest name="Fee schedule" />}
            />
            <Route
              path="insurances/*"
              element={<PageLinkTest name="Insurances" />}
            >
              <Route
                path="list"
                element={<PageLinkTest name="Insurances list" />}
              />
            </Route>
            <Route
              path="add"
              element={<PageLinkTest name="Add a new provider" />}
            />
          </Route>
        </Route>

        {/*Auth*/}
        <Route path="auth/*" element={<PageLinkTest name="Auth" />}>
          <Route
            path="profile/*"
            element={<PageLinkTest name="Auth profile" />}
          >
            <Route
              path=":currentSubmenu"
              element={<PageLinkTest name="Patient schedule id" />}
            />
          </Route>
          <Route path="logout" element={<PageLinkTest name="Logout" />} />
        </Route>

        {/*Language*/}
        <Route
          path="language"
          element={<PageLinkTest name="Change language" />}
        />

        {/*Login*/}
        <Route path="login/*" element={<PageLinkTest name="Login" />}>
          <Route
            path="chooseprovideraccount"
            element={<PageLinkTest name="Choose provider account" />}
          />
        </Route>

        {/*Administrative*/}
        <Route path="admin/*" element={<PageLinkTest name="Administrative" />}>
          <Route path="users/*" element={<PageLinkTest name="Users" />}>
            <Route path="list" element={<PageLinkTest name="List users" />} />
          </Route>
        </Route>

        <Route index element={<Home />} />
      </Route>

      {/*<Route path="patients/" element={<Patients />} />*/}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

function Home() {
  return (
    <Box className="w-full pl-20">
      <h2>Home</h2>
      <Outlet />
    </Box>
  );
}

function NoMatch() {
  return (
    <Box>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Box>
  );
}

interface Props {
  name: string;
}

// Function to validate urls
function PageLinkTest(items: Props) {
  const { patientid }: number = useParams();
  return (
    <div>
      <h1>Welcome to {items.name}</h1>
      {patientid && <b>patient id = {patientid}</b>}
      <Outlet />
    </div>
  );
}
