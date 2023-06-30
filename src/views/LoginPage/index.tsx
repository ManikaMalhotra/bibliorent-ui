import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Anchor,
    rem,
    Group,
    Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from '@mantine/hooks';
import { FcGoogle } from 'react-icons/fc';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const { classes } = useStyles();
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validate: {
            email: (value) => /^\S+@\S+$/.test(value) ? null : 'Invalid email address',
            password: (value) => value.trim().length >= 6 ? null : 'Password must be at least 6 characters long'
        },
    });

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    {type === 'register' ? "Welcome to BiblioRent!" : "Welcome back to BiblioRent!"}
                </Title>

                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    {type === 'register' && (
                        <TextInput
                            label="Name"
                            placeholder="Name"
                            value={form.values.name}
                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                            error={ type==='register' ? form.errors.name : null }
                            size="md"
                            required
                        />
                    )}

                    <TextInput
                        label="Email address"
                        placeholder="Email"
                        size="md"
                        mt="md"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                        error={form.errors.email}
                        required
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        mt="md"
                        size="md"
                        value={form.values.password}
                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                        error={form.errors.password}
                        required
                    />

                    <Divider 
                        label={`Or ${type === 'register' ? 'register' : 'login'} with`}
                        labelPosition="center" 
                        my="lg" 
                    />

                    <Button 
                        mt="xl" 
                        size="md" 
                        variant="outline" 
                        color="dark" 
                        leftIcon={<FcGoogle size={rem(18)} />} 
                        fullWidth
                    >
                        Google
                    </Button>

                    <Group position="apart" mt="xl">
                        <Anchor
                            component="button"
                            type="button"
                            color="dimmed"
                            onClick={() => toggle()}
                            size="xs"
                        >
                            {type === 'register'
                                ? 'Already have an account? Login'
                                : "Don't have an account? Register"}
                        </Anchor>
                        <Button type="submit" variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={() => navigate('/home')}>
                            {upperFirst(type)}
                        </Button>
                    </Group>
                </form>
            </Paper>
        </div>
    );
}