import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(req: NextRequest) {
    // Basic認証が不要な環境（開発環境など）があればここで判定
    // if (process.env.NODE_ENV === 'development') return NextResponse.next();

    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        // 環境変数でID/PASSを設定（設定がない場合はデフォルト値を使用）
        const validUser = process.env.BASIC_AUTH_USER || 'admin';
        const validPass = process.env.BASIC_AUTH_PASSWORD || 'password';

        if (user === validUser && pwd === validPass) {
            return NextResponse.next();
        }
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    });
}
